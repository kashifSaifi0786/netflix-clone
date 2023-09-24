'use client'
import useFavorite from "@/hooks/useFavorites";
import { User } from "@prisma/client";
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'

interface FavoriteButtonProps {
    currentUser?: User | null;
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId, currentUser }) => {
    const { hasFavorited, toggleFavorite } = useFavorite({ movieId, currentUser })

    const Icon = hasFavorited ? AiOutlineCheck : AiOutlinePlus;

    return (<div
        onClick={toggleFavorite}
        className="
    cursor-pointer
    h-6
    w-6
    lg:h-10
    lg:w-10
    border-2
    border-white
    rounded-full
    transition
    hover:border-neutral-300
    flex
    items-center
    justify-center

    ">
        <Icon size={20} className="text-white" />
    </div>);
}

export default FavoriteButton;