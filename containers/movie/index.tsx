"use client";
import FavoriIndex from '@/components/favoriMovies'
import MostIndex from '@/components/mostMovies'
import PopularIndex from '@/components/popularMovies'
import React from 'react'

function MovieIndex() {
    return (
        <>
            <FavoriIndex label={'Favori Movies'} />
            <PopularIndex label={'Popular Movies'} />
            <MostIndex label={'Most Viewed'} />
        </>
    )
}

export default MovieIndex;