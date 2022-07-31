import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD22/GW/endstodayprime2._CB632192369_.jpg"
        />

        <div className="home__row">
          <Product
            id="23123"
            title="Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={123}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PvHfU+pwL._SX466_.jpg"
          />
          <Product
            id="1"
            title="pTron Bassbuds Duo in-Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless Headphones, Type-C Fast Charging, IPX4 & Voice Assistance (Black)"
            price={599}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/31lCxd3bWnL._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="Amazfit T-Rex 2 Premium Multisport GPS Sports Watch, 150+ Sports Modes (Astro Black & Gold)"
            price={15999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71v-ZijBLJL._SX425_.jpg"
          />
          <Product
            id="3"
            title="Hisense 108 cm (43 inches) Bezelless Series 4K Ultra HD Smart LED Google TV 43A6H (Black)"
            price={28890}
            rating={3}
            image="https://m.media-amazon.com/images/I/71y4kCMAxzL._SX466_.jpg"
          />
          <Product
            id="4"
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
            price={2099}
            rating={5}
            image="https://m.media-amazon.com/images/I/41FgiLFNhFL._SY450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title='Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB NVIDIA GTX 1650/120Hz/Win 11/Backlit/3months Game Pass/Shadow Black/2.25Kg), 82K10198IN'
            price={52999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71--IQUHVwL._SX425_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
