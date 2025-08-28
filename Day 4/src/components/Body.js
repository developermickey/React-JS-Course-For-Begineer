import RestaurantCard from "./RestaurantCard";
import listOfRestaurants from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="search-btn">
                    🔍
                </button>
            </div>

            <div className="res-container">
                {
                    listOfRestaurants.map(item => (
                        <RestaurantCard resData={item} />
                    ))
                }

            </div>
        </div>
    )
}


export default Body;