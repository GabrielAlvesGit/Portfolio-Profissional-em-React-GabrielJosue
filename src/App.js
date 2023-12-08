import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";
import Sobre from "./components/about/Sobre";

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <Sobre />
            </main>
        </>
    );
};

export default App;
