import { Movie, User } from "@prisma/client";
import { BsFillPlayFill, } from "react-icons/bs";
import FavoriteButton from "../common/FavoriteButton";
import Link from "next/link";
import ShowInfo from "./show-info";
import useInfoModel from "@/hooks/useInfoModel";
import getMovies from "@/app/actions/getMovies";

interface MovieCardProps {
    movie: Movie;
    currentUser?: User | null;
}

const MovieCard: React.FC<MovieCardProps> = async ({ movie, currentUser }) => {
    return (<div className="bg-zinc-900 col-span group relative h-36 lg:h-[12vw]">
        <img
            src={movie.thumbnailUrl}
            alt="Thumbnail"
            draggable={false}
            className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-md
            group-hover:opacity-90
            sm:group-hover:opacity-0
            delay-300
            w-full
            h-36
            lg:h-[12vw]
            "
        />
        <div
            className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
        "
        >
            <img
                src={movie.thumbnailUrl}
                alt="Movie"
                className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-36
            lg:h-[12vw]
            "
            />
            <div
                className="
        z-10
        bg-zinc-800
        p-2
        lg:p-4
        absolute
        w-full
        transition
        shadow-md
        rounded-b-md
        "
            >

                <div className="flex flex-row items-center gap-3">
                    <div
                        className="
                cursor-pointer
                w-6
                h-6
                lg:h-10
                lg:w-10
                bg-white
                rounded-full
                flex
                items-center
                justify-center
                hover:bg-neutral-300
                transition
                "
                    >
                        <Link href={`/watch/${movie.id}`}>
                            <BsFillPlayFill size={30} />
                        </Link>
                    </div>
                    <FavoriteButton movieId={movie.id} currentUser={currentUser} />
                    <ShowInfo movieId={movie.id} />
                </div>

                <p className="text-green-400 font-semibold mt-4">
                    New <span className="text-white">{2023}</span>
                </p>

                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[10px] lg:text-sm">{movie.duration}</p>
                </div>

                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[10px] lg:text-sm">{movie.genre}</p>
                </div>
            </div>
        </div>
    </div>);
}

export default MovieCard;