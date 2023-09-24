import { Movie, User } from "@prisma/client";
import MovieCard from "./movie-card";

interface MovieListProps {
    movies: Movie[] | null;
    title: string;
    currentUser?: User | null;
}

const MovieList: React.FC<MovieListProps> = ({ movies, title, currentUser }) => {

    if (!movies || movies?.length === 0) {
        return null;
    }

    return (<div className="px-4 md:px-12 mt-4 space-y-8">
        <div>
            <p className="text-white md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {
                    movies?.map(movie => (
                        <MovieCard key={movie.id} movie={movie} currentUser={currentUser} />
                    ))
                }
            </div>
        </div>
    </div>);
}

export default MovieList;