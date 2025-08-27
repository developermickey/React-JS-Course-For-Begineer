import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello From JSX</h1>;

// React Components

// Class Based Components
// Functional Based Components

const Title = () => {
    return <h1>Welcome to Title</h1>;
};

export const HeadingComponents = () => (
    <>
        <h1>Heading Functional Components</h1>
        <Title />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents />);
