import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        avgRating,
        id
    } = resData?.data;

    return (
        <div key={id} className="res-card">
            <div className="image">
                <img src={CDN_URL + cloudinaryImageId} alt={name} />
            </div>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h6>{costForTwo}</h6>
        </div>
    )
}

export default RestaurantCard;