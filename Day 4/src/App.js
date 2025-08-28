/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *     - Image, Name, Star rating, cuisine, delivery time
 * Footer
 * - CopyRight
 * - Links
 * - Social Media Link
 * - Address
 * - Contact
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

