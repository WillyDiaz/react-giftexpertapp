import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGird } from './components/GifGird';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>
                Gift Expert App
                <AddCategory setCategories={setCategories} />
            </h2>
            <hr />

            <ol>
                {
                    categories.map(category => <GifGird key={category} category={category} />)
                }
            </ol>
        </>)
}


export default GifExpertApp