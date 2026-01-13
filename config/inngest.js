import {Inngest} from "inngest";

export const inngest = new Innges({id: "app/config/inngest" });

export const syncUserEvent = inngest.createFunction(
   { 
    id: "clerk/sync-created" 
  },
  { 
    event: "clerk/user.created" 
  },
  async ({ event }) => {
    const {
      id,
      first_name,
      last_name,
      email_addresses,
      profile_image_url,
    } = event.data;
