import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGirdItem } from './GifGirdItem';

export const GifGird = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map(img => (<GifGirdItem key={img.id} {...img} />))
                }
            </div>
        </>
    )
}