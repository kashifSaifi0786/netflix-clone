import getRandom from "@/app/actions/getRandom";
import InfoButton from "./info-button";
import PlayButton from "./play-button";

const Billboard = async () => {
    const movie = await getRandom();

    if (!movie) {
        return null;
    }

    return (<div className="relative h-[56.25vw]">
        <video
            src={movie.videoUrl}
            poster={movie.thumbnailUrl}
            autoPlay
            loop
            muted
            className="h-[56.25vw] object-cover w-full brightness-[60%]"
        ></video>
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
            <p className="text-white text-xl font-bold drop-shadow-xl w-[50%] md:text-5xl lg:text-6xl">
                {movie.title}
            </p>
            <p className="text-white text-[8px] mt-3 md:mt-8 md:text-lg w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                {movie.description}
            </p>
            <div className="flex flex-row items-center gap-3 mt-3 md:mt-4">
                <PlayButton movieId={movie.id} />
                <InfoButton movieId={movie.id} />
            </div>
        </div>
    </div>);
}

export default Billboard;