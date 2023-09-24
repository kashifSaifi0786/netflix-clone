import { authOptions } from "../api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";
import prisma from "@/lib/prismadb";

export default async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) return null;

    return user;
  } catch (error) {
    return null;
  }
}
