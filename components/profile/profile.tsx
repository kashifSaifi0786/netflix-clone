import { User } from "@prisma/client";
import { BsFillPlayFill } from 'react-icons/bs'
import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
    currentUser?: User | null;
}

const Profile: React.FC<ProfileProps> = ({ currentUser }) => {

    return (<div className="h-full flex items-center justify-center">
        <div className="flex flex-col">
            <div className="text-3xl md:text-6xl text-white text-center">
                Who&apos;s watching
            </div>

            <div className="flex items-center justify-center gap-8 mt-10">
                <div className="group w-44 mx-auto flex-row">
                    <div className="
                    w-44
                    h-44
                    relative
                    rounded-md
                    flex
                    items-center
                    justify-center
                    border-2
                    border-transparent
                    group-hover:cursor-pointer
                    group-hover:border-white
                    overflow-hidden
                    ">
                        <Image
                            src={'/images/default-blue.png'}
                            alt=""
                            fill
                        />
                    </div>
                    <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                        {currentUser?.name}
                    </div>
                </div>
            </div>
            <div>
                <Link href="/">
                    <button className="mx-auto mt-4 bg-green-400 px-2 py-1 rounded-md flex items-center justify-center gap-2">
                        Stream Now
                        <div className="h-6 w-6 border-2 border-black rounded-full flex items-center justify-center">
                            <BsFillPlayFill />
                        </div>
                    </button>
                </Link>
            </div>
        </div>

    </div>);
}

export default Profile;