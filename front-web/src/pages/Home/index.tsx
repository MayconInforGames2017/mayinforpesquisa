import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg'; 
import { ReactComponent as GamerImage } from '../../assets/gamer.svg'; 
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais jogos você mais gosta?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão abaixo e fique por dentro dos jogos que os gamers mais curtem!
            </h3>
            <Link to="/records">
                <div className="home-actions">
                    <button className="home-btn">
                        QUERO SABER QUAIS
                    </button>
                    <div className="home-btn-icon">
                        <ArrowIcon />
                    </div>
                </div>
            </Link>
        </div>
        <GamerImage className="home-image" />
    </div>
);

export default Home;