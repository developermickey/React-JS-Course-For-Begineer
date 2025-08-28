import RestaurantCard from "./RestaurantCard";
import listOfRestaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [isTopRated, setIsTopRated] = useState(false);
    const [searchText, setSearchtext] = useState("");

    const handleFilterTopRes = () => {
        if (isTopRated) {
            // ✅ Reset back to full list
            setFilterRestaurants(restaurants);
            setIsTopRated(false);
        } else {
            // ✅ Apply top rated filter
            const filteredList = restaurants.filter(
                (res) => res.info.avgRating > 4.5
            );
            setFilterRestaurants(filteredList);
            setIsTopRated(true);
        }
    };

    const handleSearch = () => {
        const filterRestro = restaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterRestaurants(filterRestro); // ✅ only update filtered list
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2659074&lng=77.4123565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const result = await response.json();
        setRestaurants(
            result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        //console.log(result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        setFilterRestaurants(
            result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchtext(e.target.value)}
                />
                <button className="search-btn" onClick={handleSearch}>
                    🔍
                </button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={handleFilterTopRes}>
                    {isTopRated ? "Reset" : "Top Rated"} {/* ✅ Toggle button text */}
                </button>
            </div>

            <div className="res-container">
                {filterRestaurants.map((item) => (
                    <RestaurantCard key={item.info.id} resData={item} />
                ))}
            </div>
        </div>
    );
};

export default Body;
