// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout/Layout';
// import { Container } from "./Container/Container";
import { HomePage } from "../pages/HomePage/HomePage";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { MovieDetailsPage } from "../pages/MovieDetailsPage/MovieDetailsPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

// const Layout = lazy(() => import("./Layout/Layout"));
// const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
// const Cast = lazy(() => import("./Cast/Cast"));
// const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {

  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
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

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// / movies /: movieId / cast – компонент Cast, інформація про акторський склад.Рендериться на сторінці MovieDetails.
// / movies /: movieId / reviews – компонент Reviews, інформація про огляди.Рендериться на сторінці MovieDetails.