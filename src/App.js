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
import ScrollUp from "./components/scrollup/ScrollUp";
import Themes from "./components/theme/Themes";
import Modal from "./components/Modal/Modal";

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Themes />
                <Home />
                <Sobre />
                <Habilidades />
                <Project />
                <Qualificacao />
                <Contato />
                <Modal />
            </main>
            <Footer />
            <ScrollUp />
        </>
    );
};

export default App;
