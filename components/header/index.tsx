"use client";
import Link from 'next/link';
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMovieStore } from '@/state/store';

function Header() {

    const [inputCustom, setInputCustom] = useState(false);

    const router = useRouter();
    const handleRouter = () => {
        router.push('/')
    }

    const trendingMovies = useMovieStore((state) => state.trendingMovies);
    const filterState = useMovieStore((state) => state.filterState);
    const setFilterState = useMovieStore((state) => state.setFilterState);

    const handleFilter = (e: any) => {
        const filterValue = e.target.value.toLowerCase();
        if (filterValue.length > 0) {
            const updateFilter = trendingMovies.filter((item) =>
                item.title.toLowerCase().includes(filterValue)
            );
            setFilterState(updateFilter);
        } else {
            setFilterState([]);
        }
    };


    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <FaPlay />
                    <button onClick={handleRouter} className="ml-3 text-xl hover:text-gray-400">Movies Play</button>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {inputCustom ?
                        <div className='flex items-center'>
                            <input onChange={handleFilter} className='mr-4 px-2 py-1 h-7 w-18 rounded-xl outline-none bg-gray-700 text-white' type="search" />
                            <button onClick={() => {
                                setInputCustom(!inputCustom);

                            }} className='mr-5'><FaSearch />
                            </button>
                        </div>
                        : <button className='mr-5' onClick={() => setInputCustom(!inputCustom)}><FaSearch /></button>}

                    <Link href='/movies' className="mr-5 text-white hover:text-gray-400">Movies</Link>
                    <Link href='/series' className="mr-5 text-white hover:text-gray-400">Series</Link>
                </nav>
                <Link href='/login' className="mr-5 inline-flex items-center text-white focus:outline-none hover:text-gray-400 rounded text-base mt-4 md:mt-0">
                    <IoPersonSharp />
                </Link>
            </div>
        </header>
    )
}

export default Header;