/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';

import './singleCharacterLayout.scss';


const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail} = data;
    const navigate = useNavigate();
    const goBackHandler = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    

    return (
        <div className="single-char">
            <img src={thumbnail} alt={name} className="single-char__img"/>
            <div className="single-char__info">
                <h2 className="single-char__name">{name}</h2>
                <p className="single-char__descr">{description}</p>
            </div>
            <a href="#" onClick={goBackHandler} className="single-char__back">Go back</a>
        </div>
    )
}

export default SingleCharacterLayout;