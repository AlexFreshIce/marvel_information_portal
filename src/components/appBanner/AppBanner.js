import './appBanner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';


const AppBanner = () => {

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // const updateWidth = useCallback(() => {
    //     setWindowWidth(window.innerWidth)
    // }, []);


    // useEffect(() => {
    //     window.addEventListener('resize', updateWidth)
    //     return () => window.removeEventListener('resize', updateWidth)
    // }, [updateWidth]);

    // const avenLogo = windowWidth > 639 ? <img src={avengersLogo} alt="Avengers logo" /> : null

    return (
        <div className="app__banner">
            <img src={avengers} alt="Avengers" />
            <div className="app__banner-text">
                New comics every week!<br />
                Stay tuned!
            </div>
            <img className="app__banner-visible" src={avengersLogo} alt="Avengers logo" />
        </div>
    )
}

export default AppBanner;