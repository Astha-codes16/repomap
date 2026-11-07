"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function provisionWorkspace() {
  const { userId, orgId } = await auth.protect();

  if (orgId) {
    return { organizationId: orgId };
  }

  const client = await clerkClient();
  const organization = await client.organizations.createOrganization({
    name: "My Workspace",
    createdBy: userId,
  });

  return { organizationId: organization.id };
}
