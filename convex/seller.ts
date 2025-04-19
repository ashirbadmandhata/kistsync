import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getByUserId = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("sellers")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("sellers", {
      ...args,
      isActive: true, // Mark them active immediately (or add approval flow later)
    });
  },
});
