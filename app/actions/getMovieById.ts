import prisma from "@/lib/prismadb";

interface IParams {
  movieId: string;
}

export default async function getMovieById(movieId: string) {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      return null;
    }

    return movie;
  } catch (error) {
    return null;
  }
}
