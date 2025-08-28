import { useState } from "react";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const handleBtnName = () => {
        btnName === "Login" ?
            setBtnName("Logout") :
            setBtnName("Login")
    };

    return (
        <div className="header">
            <div className="logo-container">
                <h3 className="logo">Bitezy 🍔</h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={handleBtnName} className="login-btn">
                        {
                            btnName
                        }
                    </button>
                </ul>

            </div>

        </div>
    )
}

export default Header;