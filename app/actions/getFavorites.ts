import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getFavorites() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const movies = await prisma.movie.findMany({
    where: {
      id: {
        in: currentUser.favoriteIds,
      },
    },
  });

  return movies;
}
