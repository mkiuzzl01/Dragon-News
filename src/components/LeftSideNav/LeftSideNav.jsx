import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { newContext } from "../Home/Home";

const LeftSideNav = () => {
    const news = useContext(newContext);
    const [catagories,setCatagories] = useState([]);
    

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCatagories(data))
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
                    news.splice(0,3).map((news,sideBar)=> <NewsCard key={news.id} sideBar={sideBar} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;