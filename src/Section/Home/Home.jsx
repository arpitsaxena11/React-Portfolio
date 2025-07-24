import './Home.css';
import profile from "../../assets/profile.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import lidark from "../../assets/linkedin-dark.svg";
import lilight from "../../assets/linkedin-light.svg";
import gitlight from "../../assets/github-light.svg";
import gitdark from "../../assets/github-dark.svg";
import weblight from "../../assets/web-icon-light.svg";
import webdark from "../../assets/web-icon-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import TypingEffect from "../../common/TypingText";
import StyleSwitcher from "../../common/StyleSwitcher";

function Home() {
  const {theme , toggleTheme} = useTheme();  
  const themeIcon = theme === 'light' ? sun : moon;
  const linkIcon = theme === 'light' ? lilight : lidark;
  const gitIcon = theme === 'light' ? gitlight : gitdark;
  const webIcon = theme === 'light' ? weblight : webdark;

  return (
    <>
      <section className="Container">
        <div className='div'>
          <img className="profile" src={profile} alt="" />
          <img className="themeIcon" src={themeIcon} alt="" onClick={toggleTheme}/>
          <StyleSwitcher/>
        </div>
        <div className='info'>
          <h1>
            Arpit Saxena
          </h1>
           <h2><TypingEffect/></h2>
          <span>
            <a href="https://www.linkedin.com/in/arpit-sna/" target="_blank">
              <img src={linkIcon} alt="" />
            </a>
            <a href="https://github.com/arpitsaxena11" target="_blank">
              <img src={gitIcon} alt="" />
            </a>
            <a href="https://pair11.netlify.app/" target="_blank">
              <img src={webIcon} alt="" />
            </a>
          </span>
          <p className='desc' >
            Computer Engineering graduate with a solid foundation in programming, software development, and problem-solving. Motivated to contribute to impactful projects and grow in a dynamic tech-driven environment.
          </p>
          <a id='button' href="https://drive.google.com/file/d/1sudxCVFdD-pCXIimCWlUpyewOroW3xJG/view?usp=sharing" target="_blank">
          <button className="Resume">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
