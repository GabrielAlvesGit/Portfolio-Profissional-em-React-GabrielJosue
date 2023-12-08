import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sobre from "./components/about/Sobre";
import Home from "./components/home/Home";

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
