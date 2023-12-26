import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sobre from "./components/about/Sobre";
import Home from "./components/home/Home";
import Habilidades from "./components/skills/Habilidades";
import Project from "./components/project/Project";

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <Sobre />
                <Habilidades />
                <Project />
            </main>
        </>
    );
};

export default App;
