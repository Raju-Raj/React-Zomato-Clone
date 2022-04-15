import React from 'react'
import Slider from 'react-slick/lib/slider';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./deliveryCollections.css"
import DeliveryItem from './deliveryItem';

const deliveryItems=[
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Burger",
        cover:"https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        title:"Chicken",
        cover:"https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        title:"Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
        id:5,
        title:"Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id:6,
        title:"Biryani",
        cover:"https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:7,
        title:"Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id:8,
        title:"Home Style",
        cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
        <div className="max-width">
            <div className="collection-title">Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return <DeliveryItem item={item}/>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections;

