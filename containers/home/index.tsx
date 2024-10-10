"use client"
import GenresIndex from '@/components/genres';
import LoadingIndex from '@/components/loading';
import MovieIndex from '../movie';
import React from 'react'
import { useEffect, useState } from 'react';

function HomeIndex() {

    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoading(false);
        }, 2000)
    }, [])

    return (
        <div>
            {showLoading && <LoadingIndex />}

            {!showLoading && (
                <div>
                    {/* <GenresIndex /> */}
                    <MovieIndex />
                </div>
            )}
        </div>
    )
}

export default HomeIndex;