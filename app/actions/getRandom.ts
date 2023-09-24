import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getRandom() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const movieCount = await prisma.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const movies = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return movies[0];
  } catch (error) {
    return null;
  }
}
