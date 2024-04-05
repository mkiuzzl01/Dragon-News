import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";

const Home = () => {
  return (
    <body>
      <header>
        <Header></Header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <section className="">
          <LeftSideNav></LeftSideNav>
        </section>
        <section className="md:col-span-2 border-2">
          <h1>This is Middle section</h1>
        </section>
        <section className="">
          <RightSideNav></RightSideNav>
        </section>
      </main>
    </body>
  );
};

export default Home;
