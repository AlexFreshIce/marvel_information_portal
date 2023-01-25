import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null)

    const { loading, error, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [props.charId])

    const updateChar = () => {
        const { charId } = props
        if (!charId) { return }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
    }



    const onCharLoaded = (char) => {
        setChar(char)
    }



    const skeleton = char || loading || error ? null : <Skeleton />
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null
    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;
    const nullDescription = 'Classified information'
    const finalDescription = description ? description : nullDescription
    const comicsList = []
    for (let i = 0; i < comics.length; i++) {
        if (i > 10) break
        const comicID = comics[i].resourceURI.split('/').slice(-1)
        const elem = <li key={i} className="char__comics-item" tabIndex={0}>
             <Link to={`/comics/${comicID}`}>
            {comics[i].name}
            </Link>
        </li>
        comicsList.push(elem)
    }

    let imgStyle = { 'objectFit': 'cover' };
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'contain' };
    }
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div>
                    <div className="char__info-name" tabIndex={0} >{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr" tabIndex={0}>
                {finalDescription}
            </div>
            <div className="char__comics" tabIndex={0}>Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {comicsList}
            </ul>
        </>
    )
}

CharInfo.protoType = {
    charId: PropTypes.number
}

export default CharInfo;