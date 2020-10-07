import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
            <div className="home__row">
                {/**producto id, titulo, precio, rating, imagen */}
                <Product
                    id="1"
                    title="Dove Body Wash Pump, humectación profunda, 34 oz"
                    price={5.55}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/31YWXtNkeKL._AC_SY200_.jpg"
                />
                <Product
                    id="2"
                    title="Fortnite - Peluche de Llama de 7 pulgadas"
                    price={10.75}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41XCql8cjsL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                {/**producto id, titulo, precio, rating, imagen */}
                <Product
                    id="3"
                    title="Extensor de rango NETGEAR N300 de WiFi, Essentials Edition (EX2700)"
                    price={50.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41ffko0T3kL._AC_SY200_.jpg"
                />
                <Product
                    id="4"
                    title="BENGOO G9000 Auriculares estéreo para juegos para PS4, PC, mando Xbox One, cancelación de ruido, auriculares con micrófono, luz LED, sonido de graves, almohadillas de memoria suave para portátiles, Mac, Nintendo PS3 Games"
                    price={100.25}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
                />
                <Product
                    id="5"
                    title="Sham almohada cuadrada Stuffer forma Insert poliéster, Standard/Color Blanco, Revestimiento de poliéster, Blanco, 18 x 18"
                    price={500.50}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/21dvL73e4LL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                {/**producto id, titulo, precio, rating, imagen */}
                <Product
                    id="6"
                    title="Apple iPhone 11., Púrpura"
                    price={1750.25}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UL320_.jpg"
                />
            </div>

                {/**producto */}
        </div>
    );
}

export default Home