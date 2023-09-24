import Navbar from '@/components/navbar/navbar';
import getCurrentUser from './actions/getCurrentUser'
import { redirect } from 'next/navigation'
import Billboard from '@/components/billboard/billboard';
import getMovies from './actions/getMovies';
import MovieList from '@/components/movies/movie-list';
import getFavorites from './actions/getFavorites';
import InfoModel from '@/components/common/InfoModel';

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/auth')
  }

  const movies = await getMovies();
  const favMovies = await getFavorites();


  return (
    <main>
      <InfoModel currentUser={user} movies={movies} />
      <Navbar currentUser={user} />
      <Billboard />
      <div className='pb-40'>
        <MovieList currentUser={user} title='Trending Now' movies={movies} />
        <MovieList currentUser={user} title='My List' movies={favMovies} />
      </div>
    </main>
  )
}
