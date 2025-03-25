"use client"

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react";
import { useEffect } from "react";

function SyncUserWithConvex() {
    const {user} = useUser();
    // update user
    const updateUser = useMutation(api.users.updateUser);

    useEffect(() => {
      if (!user) return;
  
      const syncUser = async () => {
        try {
          await updateUser({
            userId: user.id,
            name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
            email: user.emailAddresses[0]?.emailAddress ?? "",
            // name:user.fullName,
            // email: user.emailAddresses[0]?.emailAddress ?? "",
          });
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      };
  
      syncUser();
    }, [user, updateUser]);

  return  null;
}

export default SyncUserWithConvex
