import '../../Styles/Skills.css';
import AttractionsIcon from '@mui/icons-material/Attractions';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';

function Skills() {

    return (

        <div className='skills'>
            <div className='container'>
                <div className="position">
                    <AttractionsIcon />
                    <p className="a-sub">React</p>
                </div>
                <p className="a-desc"> Basic</p>
            </div>

            <div className='container'>
                <div className="position">
                    <HtmlIcon />
                    <p className="a-sub">HTML</p>
                </div>
                <p className="a-desc"> Intermediate</p>
            </div>


            <div className='container'>
                <div className="position">
                    <CssIcon />
                    <p className="a-sub">Css</p>
                </div>
                <p className="a-desc"> Intermediate</p>
            </div>

            <div className='container'>
                <div className="position">
                    <JavascriptIcon />
                    <p className="a-sub">JavaScript</p>
                </div>
                <p className="a-desc"> Basic</p>
            </div>

            <div className='container'>
                <div className="position">
                    <GitHubIcon />
                    <p className="a-sub">Git</p>
                </div>
                <p className="a-desc"> Intermediate </p>
            </div>

        </div>

    );
}

export default Skills;