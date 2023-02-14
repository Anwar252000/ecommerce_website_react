import { useEffect } from "react";
import { useState } from "react"

function Home() {
    const [arrival, setArrival] = useState([]);
    const [trend, setTrend] = useState([]);
    const [category, setCategory] = useState([]);

    let nowInTrend = [

        {
            img: "https://cdn.shopify.com/s/files/1/0429/7654/2881/products/DECA11AAA2211161_1_360x.jpg?v=1674889458",
            name: "Arrangement..RA19126-082 ZA-155",
            price: 899.99
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0429/7654/2881/products/DECA11AAA2211168_4_360x.jpg?v=1674889476",
            name: "Arrangement..RA19126-082 ZA-155",
            price: 699.99
        },
            {
                img: "https://cdn.shopify.com/s/files/1/0429/7654/2881/products/DECA11AAA2211168_2_360x.jpg?v=1674889471",
                name: "Arrangement..RA19126-082 ZA-155",
                price: 599.99
            },
            {
                img: "https://cdn.shopify.com/s/files/1/0429/7654/2881/products/DECA11AAA2211168_4_360x.jpg?v=1674889476",
                name: "Arrangement..RA19126-082 ZA-155",
                price: 499.99
            },
        {
            img: "https://cdn.shopify.com/s/files/1/0429/7654/2881/products/DECA11AAA2211168_2_360x.jpg?v=1674889471",
            name: "Arrangement..RA19126-082 ZA-155",
            price: 299.99
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0429/7654/2881/products/DECA11AAA2211161_2_360x.jpg?v=1674890711",
            name: "Arrangement..RA19126-082 ZA-155",
            price: 99.99
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0429/7654/2881/products/DECA11AAA2211168_4_360x.jpg?v=1674889476",
            name: "Arrangement..RA19126-082 ZA-155",
            price: 199.99
        }
    ]

    let newArrival = [
        {
            name: 'New Arrival',
            img: 'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/Web_tiles-08_1024x1024_crop_center.jpg?v=1671624103',
        },
        {
            name: 'New Arrival',
            img: 'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/Web_tiles-10_5aa6db5d-a654-4c20-81ca-46ffe15812f5_1024x1024_crop_center.jpg?v=1671699471',
        },
        {
            name: 'New Arrival',
            img: 'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/Nespresso-08_1024x1024_crop_center.jpg?v=1674536884',
        },
        {
            name: 'New Arrival',
            img1: 'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/Web_tiles-12_485e8fa4-e803-48e4-9c0e-08b657198189_1024x1024_crop_center.jpg?v=1672991756',
        },
        {
            name: 'New Arrival',
            img1: 'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/Web_tiles-11_1024x1024_crop_center.jpg?v=1671871118',
        }
    ]

    const categories=[
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/1_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/2_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/3_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/4_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/5_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/6_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/7_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/8_170_1024x1024_crop_center.jpg?v=1626262215'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/1_170_3f1e30a6-35d5-418e-b037-f260db6f1507_1024x1024_crop_center.jpg?v=1630403327'
        },
        {
            img:'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/9_170_1024x1024_crop_center.jpg?v=1626262215'
        }
    ]

    const catego=()=>{
        setCategory(categories)
    }

    const arrivals = () => {
        setArrival(newArrival);
    }

    useEffect(() => {
        arrivals();
        trends();
        catego();
    }, [])

    const trends = () => {
        setTrend(nowInTrend);
    }

    return (
        <>
            <img className="bg-cover mt-11" src="https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FHPbanner-desktop-15-extension.png%3Fcontext%3DbWFzdGVyfHJvb3R8Mjg2NTY3fGltYWdlL3BuZ3xoNGMvaDVlLzkwMTcwMjc4MjE1OTgucG5nfDRkYjEyMTQzNDljZDNlMzZmZGJiODRlNDgzMTA5OGNkZTQ4OTBkMjMzMmQ5MGNhYmIxZmJjOGI0NmE5NmYyYTc" alt="Img" />
            <h1 className="font-bold text-4xl text-center my-3 drop-shadow-lg text-red-700">Our Product</h1>
            <div className="flex flex-wrap justify-evenly">
                {arrival.map((element) =>
                    <div className="m-2 w-72 hover:drop-shadow-2xl">
                        <img className="rounded-[12px]" src={element.img} />
                    </div>
                )}
                {arrival.map((element) =>
                    <div className=" w-96 hover:drop-shadow-2xl flex">
                        <img className="rounded-[12px]" src={element.img1} alt="" />
                    </div>
                )}
            </div>
            <h1 className="font-bold text-3xl text-center text-red-700 my-4 drop-shadow-lg">Now in Trend</h1>
            <div className="breadcrumbs flex bg-gray-100 my-2">
                {trend.map((e) =>
                    <div className="mx-4 w-64">
                        <img src={e.img} alt="" />
                        <p>{e.name}</p>
                        <p>${e.price}</p>
                        <button className="m-2 border-solid border-2 border-gray-900 transition duration-300 hover:bg-orange-600 hover:text-white py-2 px-2 rounded-full" >Add To Cart</button>
                    </div>
                )}
            </div>
            <div className="indicator w-full">
                <span className="text-1xl py-4 px-5 flex justify-center cursor-pointer hover:bg-orange-600 indicator-item indicator-center indicator-middle badge">Shop Now</span>
                <img src="https://cdn.shopify.com/s/files/1/0429/7654/2881/files/habbit_1920x.jpg?v=1661346906" />
            </div>
            <div className="categories flex justify-center flex-wrap m-4">
                {category.map((e) =>
                <img className="my-2 mx-2 cursor-pointer" src={e.img} alt="" />
            )}
            </div>
        </>
    )
}

export default Home
