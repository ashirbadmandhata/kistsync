import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// ✅ Get ticket for a user and event
export const getUserTicketForEvent = query({
  args: {
    eventId: v.id("events"),
    userId: v.string(),
  },
  handler: async (ctx, { eventId, userId }) => {
    const ticket = await ctx.db
      .query("tickets")
      .withIndex("by_user_event", (q) =>
        q.eq("userId", userId).eq("eventId", eventId)
      )
      .first();

    return ticket;
  },
});

// ✅ Get ticket with event details
export const getTicketWithDetails = query({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, { ticketId }) => {
    const ticket = await ctx.db.get(ticketId);
    if (!ticket) return null;

    const event = await ctx.db.get(ticket.eventId);

    return {
      ...ticket,
      event,
    };
  },
});

// ✅ Get valid or used tickets for an event
export const getValidTicketsForEvent = query({
  args: { eventId: v.id("events") },
  handler: async (ctx, { eventId }) => {
    return await ctx.db
      .query("tickets")
      .withIndex("by_event", (q) => q.eq("eventId", eventId))
      .filter((q) =>
        q.or(q.eq(q.field("status"), "valid"), q.eq(q.field("status"), "used"))
      )
      .collect();
  },
});

// ✅ Update ticket status
export const updateTicketStatus = mutation({
  args: {
    ticketId: v.id("tickets"),
    status: v.union(
      v.literal("valid"),
      v.literal("used"),
      v.literal("refunded"),
      v.literal("cancelled")
    ),
  },
  handler: async (ctx, { ticketId, status }) => {
    await ctx.db.patch(ticketId, { status });
  },
});

// ✅ NEW: Create a ticket
export const createTicket = mutation({
  args: {
    eventId: v.id("events"),
    userId: v.string(),
    eventName: v.string(),
    price: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("tickets", {
      eventId: args.eventId,
      userId: args.userId,
      eventName: args.eventName,
      price: args.price,
      purchasedAt: Date.now(),
      status: "valid",
    });
  },
});
