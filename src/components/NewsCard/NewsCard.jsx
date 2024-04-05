import PropTypes from 'prop-types';
import { CiCalendar } from "react-icons/ci";
const NewsCard = ({news}) => {
    const {title,author} = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-4">
        <figure><img src={author.img} alt={title} /></figure>
        <div className="card-body p-2">
          <h2 className="font-semibold">{title}</h2>
          <div className="card-actions flex justify-between">
            <p>Sports</p>
           <p className='flex items-center space-x-2'><span><CiCalendar /></span><span>{author.published_date}</span></p>
          </div>
        </div>
      </div>
    );
};

NewsCard.propTypes = {
    news:PropTypes.object
};

export default NewsCard;