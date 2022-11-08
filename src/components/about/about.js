import AboutGrid from "../about-grid/aboutGrid";


const About = (props) => {
    const {photo, icon} = props;
    return (
        <section className="about">
            <AboutGrid photo={photo}
                       icon={icon}/>
            <div className="about__divider"></div>
        </section>
    )
}

export default About;