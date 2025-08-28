import RestaurantCard from "./RestaurantCard";
import listOfRestaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    const handleFilterTopRes = () => {
        const filteredList = restaurants.filter(
            (res) => res.info.avgRating > 4.5
        );
        setRestaurants(filteredList);
    };

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2659074&lng=77.4123565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const result = await response.json();
        console.log(result);
        setRestaurants(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }

    return restaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="search-btn">
                    🔍
                </button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={handleFilterTopRes}>Top Rated</button>

            </div>

            <div className="res-container">
                {
                    restaurants.map((item) => (
                        <RestaurantCard key={item.info.id} resData={item} />
                    ))
                }

            </div>
        </div>
    )
}


export default Body;