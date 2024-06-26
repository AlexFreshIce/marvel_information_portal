/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';

import './singleComicLayout.scss';

const SingleComicLayout = ({data}) => {

    const {title, description, pageCount, thumbnail, language, price} = data;
    const navigate = useNavigate();
    const goBackHandler = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
      <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
          <h2 className="single-comic__name">{title}</h2>
          <p className="single-comic__descr">{description}</p>
          <p className="single-comic__descr">{pageCount}</p>
          <p className="single-comic__descr">Language: {language}</p>
          <div className="single-comic__price">{price}</div>
      </div>
      <a href="#" onClick={goBackHandler} className="single-comic__back">Go back</a>
  </div>
    )
}

export default SingleComicLayout;