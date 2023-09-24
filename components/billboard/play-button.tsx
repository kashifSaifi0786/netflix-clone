import Link from 'next/link';
import { BsFillPlayFill } from 'react-icons/bs'

interface PlayButtonProps {
    movieId?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
    return (
        <Link href={`/watch/${movieId}`}>
            <div
                className="
                bg-white
                rounded-md
                py-1 md:py-2
                px-2 md:px-4
                w-auto
                text-xs lg:text-lg
                font-semibold
                flex flex-row
                items-center
                hover:bg-neutral-300
                transition"
            >
                <BsFillPlayFill className="w-4 md:w-7 mr-1" />
            </div>
        </Link>
    );
}

export default PlayButton;