import React from 'react'

import { Link } from 'react-router-dom'

const MainPage = props => {
    return (
        <div className="MainPage">
            <h1 className="title">Leo's Christmas List</h1>
            <div className="About">
                <h2 className="About-header">Leo's Info</h2>
                <h3 className="About-type">Shoe Size</h3>
                <p className="About-type-info">Men's US Size 10</p>
                <h3 className="About-type">Hoodie Size</h3>
                <p className="About-type-info">Size Large</p>
                <h3 className="About-type">Shirt Size</h3>
                <p className="About-type-info">Size Medium</p>
                <h3 className="About-type">Pants Size</h3>
                <p className="About-type-info">Men's US Size 32 or Size Small</p>
                <h3 className="About-type">*if getting anime merch</h3>
                <h3 className="About-type">Favorite Animes</h3>
                <p className="About-type-info">Naruto☆, Jujutsu Kaisen☆, Attack on Titan☆, Demon Slayer, Fire Force, Full Metal Alchemist, Black Clover</p>
            </div>

        </div>
    )
}



export default MainPage
