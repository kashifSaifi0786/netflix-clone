'use client';

'use client'
import useInfoModel from '@/hooks/useInfoModel';
import { BiDetail } from 'react-icons/bi'

interface InfoButtonProps {
    movieId: string;
}

const InfoButton: React.FC<InfoButtonProps> = ({ movieId }) => {
    const { openModel } = useInfoModel()

    return (<button
        onClick={() => openModel(movieId)}
        className="
    bg-white
    text-white
    bg-opacity-30
    rounded-md
    py-1 md:py-2
    px-2 md:px-4
    w-auto
    text-xs lg:text-lg
    font-semibold
    flex flex-row
    items-center
    hover:bg-opacity-20
    transition
    "
    >
        <BiDetail className="w-4 md:w-7 mr-1" />
        More Info
    </button>);
}

export default InfoButton;