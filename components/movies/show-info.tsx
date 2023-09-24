'use client'
import useInfoModel from "@/hooks/useInfoModel";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

interface ShowInfoProps {
    movieId: string;
}

const ShowInfo: React.FC<ShowInfoProps> = ({ movieId }) => {
    const { openModel } = useInfoModel();

    return (<div
        onClick={() => openModel(movieId)}
        className="
    cursor-pointer
    ml-auto
    group/item
    w-6
    h-6
    lg:w-10
    lg:h-10
    border-white
    border-2
    rounded-full
    flex
    items-center
    justify-center
    transition
    hover:border-neutral-300
    "
    >
        <BiChevronDown size={30} className="text-white group-hover/item:text-neutral-300 w-4" />
    </div>);
}

export default ShowInfo;