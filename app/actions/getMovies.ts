import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getMovies() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const movies = await prisma.movie.findMany();

  return movies;
}
