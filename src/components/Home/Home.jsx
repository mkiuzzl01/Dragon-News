import { createContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";
import NewsCard from "../NewsCard/NewsCard";

export const newContext = createContext([]);

const Home = () => {
    const [news,setNews] = useState([]);

    useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data=> setNews(data))
    },[])

  return (
    <body>
      <header>
        <Header></Header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <newContext.Provider value={news}>
        <section className="">
          <LeftSideNav></LeftSideNav>
        </section>
        <section className="md:col-span-2">
          {
            news.map((news,home)=> <NewsCard key={news.id} home={home} news={news}></NewsCard>)
          }
        </section>
        <section className="">
          <RightSideNav></RightSideNav>
        </section>
        </newContext.Provider>
      </main>
    </body>
  );
};

export default Home;
