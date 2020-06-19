// import { React, useEffect } from 'react'
import React from 'react'
import Carousel from './Carousel'

export default function Home({recipe}) {
    return (
        <div>
            <Carousel recipe={recipe} />
            <h1>this is home component</h1>
        </div>
    )
}
