import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavBar from "../Components/LayOut-Component/LeftNavBar";
import RightNav from "../Components/LayOut-Component/RightNav";
import Navbar from "../Components/Navbar";


const HomeLayOut = () => {
    return (
        <div className="font-poppins">

           <Header></Header>

           <section className="w-11/12 mx-auto">
            <LatestNews></LatestNews>
           </section>


           <nav className="w-11/12 mx-auto py-2">
           <Navbar></Navbar>
           </nav>



           <main className="w-11/12 mx-auto pt-5  grid grid-cols-12 gap-3">

           <aside className="left col-span-3">
            <LeftNavBar></LeftNavBar>
           </aside>

           <section className="col-span-6">

            <Outlet></Outlet>
           
           </section>


           <aside className="col-span-3">
            <RightNav></RightNav>
           </aside>

           </main>




        </div>
        
    );
};

export default HomeLayOut;