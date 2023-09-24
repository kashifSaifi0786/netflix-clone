import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

interface IParams {
  movieId: string;
  currentUser?: User | null;
}

const useFavorite = ({ movieId, currentUser }: IParams) => {
  const router = useRouter();
  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      if (!currentUser) {
        return;
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${movieId}`);
        } else {
          request = () => axios.post(`/api/favorites/${movieId}`);
        }

        await request();
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    },
    [currentUser, router, movieId, hasFavorited]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
