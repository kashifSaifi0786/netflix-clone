import getMovieById from '@/app/actions/getMovieById';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Watch = async ({ params }: { params: { movieId: string } }) => {
    const movie = await getMovieById(params.movieId);

    if (!movie) {
        return <div className='
        bg-black
        h-screen
        w-screen
        
        '>
            <div className='
            fixed
            p-4

            '>
                <Link href="/">
                    <AiOutlineArrowLeft className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
                </Link>
            </div>
            <div
                className='
                h-full
                w-full
            flex 
        items-center
        justify-center
        text-xl
        md:text-2xl
        text-white'
            >
                Oops! Something goes wrong.
            </div>
        </div>
    }

    console.log(movie)

    return (<div className='h-screen w-screen bg-black'>
        <nav className='fixed p-4 w-full z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
            <Link href={'/'}>
                <AiOutlineArrowLeft className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
            </Link>
            <p className='text-white text-xl md:text-3xl font-bold'>
                <span className="font-light">Watching:</span>
                {movie.title}
            </p>
        </nav>
        <video
            autoPlay
            controls
            src={movie.videoUrl}
            className='w-full h-full'
        ></video>
    </div>);
}

export default Watch;