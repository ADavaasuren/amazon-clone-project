import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
                    price={299}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SX679_.jpg"
                />
                <Product
                    id="125454684"
                    title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size (S and L Bands Included)"
                    price={192}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jiGaztijL._AC_SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="46465484684"
                    title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass 2.5D Edge Anti Scratch Work with Most Case"
                    price={6.97}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-D1tUDGUL._AC_SX679_.jpg"
                />
                <Product
                    id="658477"
                    title="SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter - C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-128G-GN6MA"
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/815cRpgAN3L._AC_SX679_.jpg"
                />
                <Product
                    id="98741152"
                    title="JBL Boombox - Waterproof Portable Bluetooth Speaker - Black (JBLBOOMBOXBLKAM)"
                    price={400.28}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71R1nO2uW0L._AC_SX679_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="564878"
                    title="Samsung 65-inch Class Crystal 4K UHD HDR Smart TV (Alexa Built-in) with HW-T450 Soundbar"
                    price={1000.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71f4Kck9uvL._AC_SX679_.jpg"
                />
            </div>

            {/* Product */}

        </div>
    );
}

export default Home;