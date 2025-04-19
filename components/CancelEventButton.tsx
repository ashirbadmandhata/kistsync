"use client";

import { useState } from "react";
import { Ban } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function CancelEventButton({
  eventId,
}: {
  eventId: Id<"events">;
}) {
  const [isCancelling, setIsCancelling] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const cancelEvent = useMutation(api.events.cancelEvent);

  const handleCancel = async () => {
    const confirmed = confirm(
      "Are you sure you want to cancel this event? All tickets will be refunded."
    );
    if (!confirmed) return;

    setIsCancelling(true);
    try {
      // Call the cancel event mutation to cancel the event and refund tickets
      await cancelEvent({ eventId });
      toast({
        title: "Event cancelled",
        description: "All tickets have been marked as refunded.",
      });
      router.push("/seller/events"); // Redirect to the seller events page after cancellation
    } catch (error) {
      console.error("Failed to cancel event:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to cancel event. Please try again.",
      });
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <button
      onClick={handleCancel}
      disabled={isCancelling} // Disable the button while processing
      className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
    >
      <Ban className="w-4 h-4" />
      <span>{isCancelling ? "Processing..." : "Cancel Event"}</span>
    </button>
  );
}
