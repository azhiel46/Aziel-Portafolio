import Skills from "./Skills";
import "../../Styles/About.css";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://raw.githubusercontent.com/azhiel46/Fotos/main/Img/aziel.png"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>

                <p className="a-sub">
                    You want to know about me?, let me explain!
                </p>
                <p className="a-desc">
                    Software engineering student with a 6 month work experience in the area. I'm looking to develop and expand my knowledges with the aim of quick, efficient and effective work.
                    Skills: proactive, leading, self-taught, responsible, creative, agile adaptation and learning, organized and I like to work as a team.
                </p>

                <h1 className="a-title-s">Skills</h1>

                <div className="s">
                    <div>
                        <Skills />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;