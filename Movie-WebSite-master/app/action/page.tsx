"use client";
import { useMovieStore } from '@/state/store';
import React from 'react'

function ActionPage() {

    const actionState = useMovieStore((state) => state.actionState);

    return (
        <div className="mt-24 ml-16 mr-16 cursor-pointer">
            <h2 className="mb-4 text-uppercase text-2xl font-semibold tracking-wider">Actions Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {actionState.map((item) => (
                    <div key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125 hover:z-10">
                        <h3 className="text-center">{item.title}</h3>
                        <img className="w-full h-48 object-cover" src={item.imgPath} alt={item.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActionPage;