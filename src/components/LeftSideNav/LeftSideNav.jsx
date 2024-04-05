import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const LeftSideNav = () => {
    const [catagories,setCatagories] = useState([]);
    const [news,setNews] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCatagories(data))
    },[])

    useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data=> setNews(data))
    },[])
    return (
        <div>
           <h1 className="text-2xl font-semibold mb-3">All Category</h1>
           <div className="space-y-4">
                {
                    catagories.map(catagory => <NavLink 
                    to={`/Catagory/${catagory.id}`}
                    className='block font-semibold'
                    key={catagories.id}>
                    {catagory.name}</NavLink>)
                }
            </div> 
            <div className="mt-4">
                {
                    news.splice(0,3).map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;