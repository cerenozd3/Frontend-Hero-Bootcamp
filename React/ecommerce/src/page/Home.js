import { Carousel } from "react-bootstrap";
import React from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const items = [
    {
        src: 'https://via.placeholder.com/1200x400?text=Slide+1',
        altText: 'Slide 1',
        caption: 'Welcome to our Source'
    },
    {
        src: 'https://via.placeholder.com/1200x400?text=Slide+2',
        altText: 'Slide 2',
        caption: 'Welcome to our Source'
    },
    {
        src: 'https://via.placeholder.com/1200x400?text=Slide+3',
        altText: 'Slide 3',
        caption: 'Welcome to our Source'
    },
]

function Home(){
    return(
        <div>
            <Carousel>
                {items.map((item, index)=>{
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src="{item.src}" alt="{item.altText}"></img>
                        <Carousel.Caption>
                            <h3>{item.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
            <CategoryList/>
            <ProductList/>
        </div>
    );
}

export default Home;
