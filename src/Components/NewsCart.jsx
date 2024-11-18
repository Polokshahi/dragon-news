import { FaRegStar, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCart = ({ singleNews }) => {
    console.log(singleNews)
    const {
        author,
        title,
        details,
        thumbnail_url,
        rating,
        total_view,
        others_info,
      } = singleNews;
    return (
        <div className="card w-full bg-base-100 shadow-md border border-gray-200 rounded-lg">
      {/* Author Section */}
      <div className="flex items-center p-4">
        <img
          className="w-12 h-12 rounded-full"
          src={author.img}
          alt="Author"
        />
        <div className="ml-3">
          <h3 className="font-semibold text-lg">{author.name}</h3>
          <p className="text-sm text-gray-500">{author.published_date}</p>
        </div>
        <button className="ml-auto text-gray-500">
          <FaShareAlt />
        </button>
      </div>

      {/* Thumbnail */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-lg "
        />
      </figure>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-gray-500 text-sm mt-2">
          {details.slice(0, 150)}...
          <Link to={`/news/${singleNews._id}`} className="text-blue-600 font-semibold cursor-pointer">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer Section */}
      <div className="card-footer flex items-center justify-between px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex text-orange-500">
            {[...Array(Math.round(rating.number))].map((_, index) => (
              <FaRegStar key={index} />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600">
            {rating.number}
          </span>
        </div>
        {/* Total Views */}
        <div className="flex items-center text-gray-600 gap-1">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>

      {/* Trending Badge */}
      {others_info.is_trending && (
        <span className="badge badge-secondary absolute top-4 right-4">
          Trending
        </span>
      )}
    </div>
    );
};

export default NewsCart;