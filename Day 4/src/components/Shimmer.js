import React from "react";

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(20)
                .fill("")
                .map((_, index) => (
                    <div key={index} className="shimmer-card">
                        <div className="shimmer-image"></div>
                        <div className="shimmer-line short"></div>
                        <div className="shimmer-line"></div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;
