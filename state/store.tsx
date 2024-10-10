import { Action, ActionType } from "@/data/action";
import { create } from "zustand"


interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    original_name: string;
    vote_average: number;
    popularity: number;
    original_language: string;
}

interface GenresType {
    id: number;
    name: string;
}

interface MovieStore {
    trendingMovies: Movie[];
    setTrendingMovies: (movies: Movie[]) => void;

    genresMovies: GenresType[];
    setGenresMovies: (movies: GenresType[]) => void;

    actionState: ActionType[];
    movieId: number | null;

    filterState: Movie[];
    setFilterState: (filterState: Movie[]) => void;
}

export const useMovieStore = create<MovieStore>()((set) => ({
    trendingMovies: [],
    setTrendingMovies: (movies) => set({ trendingMovies: movies }),

    genresMovies: [],
    setGenresMovies: (movies) => set({ genresMovies: movies }),

    actionState: Action,
    movieId: null,

    setMovieId: (id: number) => set({ movieId: id }),

    filterState: [],
    setFilterState: (filterState) => set({ filterState }),
}))