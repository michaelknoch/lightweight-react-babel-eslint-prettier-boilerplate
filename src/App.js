import React from "react";

const App = () => (
    <div
        style={{
            height: "100vh",
            margin: 0,
            padding: 0,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
            color: "white",
        }}
    >
        <h1>{title}</h1>
        <h3>
            <a
                href={`https://${linkToRepository}`}
                style={{
                    color: "white",
                    textDecoration: "none",
                }}
            >
                {linkToRepository}
            </a>
        </h3>
    </div>
);

const title = "lightweight react babel eslint prettier boilerplate";
const linkToRepository =
    "github.com/michaelknoch/lightweight-react-babel-eslint-prettier-boilerplate";

export default App;
