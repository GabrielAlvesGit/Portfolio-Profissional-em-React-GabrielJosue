import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sobre from "./components/about/Sobre";
import Home from "./components/home/Home";
import Habilidades from "./components/skills/Habilidades";
import Project from "./components/project/Project";
import Qualificacao from "./components/qualification/Qualificacao";
import Contato from "./components/contact/Contato";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <Sobre />
                <Habilidades />
                <Project />
                <Qualificacao />
                <Contato />
                <Footer />
            </main>
        </>
    );
};

export default App;
