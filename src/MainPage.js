import React from 'react'

import { Link } from 'react-router-dom'

const MainPage = props => {
    return (
        <div className="MainPage">
            <h1 className="Main-title">Leo's Christmas List</h1>
            <div className="About">
                <h2 className="About-header">Leo's Sizing</h2>
                <h3 className="About-type">Shoe Size</h3>
                <p className="About-type-info">Men's US Size 10</p>
                <h3 className="About-type">Hoodie Size</h3>
                <p className="About-type-info">Men's US Size 10</p>
            </div>

        </div>
    )
}



export default MainPage
