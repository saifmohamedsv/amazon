import React from 'react';
import './Home.css'
import Product from "../Product/Product";

const Home = () => {
    return (
        <div className={"home"}>
            <div className={"home__container"}>

                <img className={"home__image"}
                     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                     alt="Amazon Banner Shopping Site"
                />

                <div className={"home__row"}>
                    <Product img={"https://m.media-amazon.com/images/I/61doJ9AKCPL._AC_SY200_.jpg"}
                             title={"Razer mouse"} price={120} rating={2}/>
                    <Product
                        img={"https://m.media-amazon.com/images/I/71Dl1Mewm5L._SX342_.jpg"}
                        title={"Xbox series 1"} price={100} rating={3}/>
                </div>
                <div className={"home__row"}>
                    <Product
                        title={"TCL Tv"}
                        rating={2}
                        price={10000}
                        img={"https://m.media-amazon.com/images/I/71COd0IDN-L._AC_SX450_.jpg"}
                    />
                    <Product
                        title={"Tornado Tv"}
                        rating={4}
                        price={102333}
                        img={"https://m.media-amazon.com/images/I/51-PKfOZ14L._AC_SX425_.jpg"}
                    />
                    <Product
                        title={"Amazon Alexa echo dot"}
                        price={300}
                        rating={5}
                        img={"https://m.media-amazon.com/images/I/71nxFHMqCVL._AC_UL320_.jpg"}
                    />
                </div>
                <div className={"home__row"}>
                    <Product price={100}
                             rating={4}
                             title={"Samsung odyessy G7"}
                             img={"https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_UY218_.jpg"}/>
                </div>
            </div>
        </div>);
};

export default Home;