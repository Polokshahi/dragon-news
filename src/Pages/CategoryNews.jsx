import { useLoaderData } from "react-router-dom";
import NewsCart from "../Components/NewsCart";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const CategoryNews = () => {


    const { data:news } = useLoaderData();
    console.log(news);


    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm">{news.length}</p>



            <div className="flex flex-col gap-3">
                {
                        news?.map(singleNews => <NewsCart key={singleNews._id} singleNews={singleNews}></NewsCart>)
                }
            </div>


        </div>
    );
};

export default CategoryNews;