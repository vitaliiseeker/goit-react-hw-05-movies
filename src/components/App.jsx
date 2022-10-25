import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {

  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
