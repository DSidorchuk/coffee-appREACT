
const AboutGrid = (props) => {
    const {photo, icon} = props;
    return (
        <div className="about__grid">
            <div className="about__img">
                <img src={photo} alt="girl_with_cup"/>
            </div>
            <div className="about__descr">
                <h2 className="about__descr-title">About our beans</h2>
                <div className="about__descr-divider">
                    <img src={icon} alt="black_coffee_beans"/>
                </div>
                <div className="about__descr-text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    <br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. 
                    <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </div>
            </div>
        </div>
    )
}

export default AboutGrid; 