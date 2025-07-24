import React from 'react'
import './Skill.css'
import liCheck from '../../assets/checkmark-light.svg';
import darkCheck from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from "../../common/ThemeContext";

function Skill() {
  const {theme , toggleTheme} = useTheme();  
  const checkIcon = theme === 'light' ? liCheck : darkCheck;

  return (
  <section className='skill'>
    <h1>Skills</h1>
    <div className="skillList">
        <SkillList src={checkIcon} skill="C" />
        <SkillList src={checkIcon} skill="Java" />
        <SkillList src={checkIcon} skill="HTML" />
        <SkillList src={checkIcon} skill="CSS" /> 
    </div>
    <hr className='line'/>
    <div className="skillList">
        <SkillList src={checkIcon} skill="JavaScript" />
        <SkillList src={checkIcon} skill="React.js" />
        <SkillList src={checkIcon} skill="Node.js" />
        <SkillList src={checkIcon} skill="MySQL" /> 
    </div>
    <hr className='line'/>
    <div className="skillList">
        <SkillList src={checkIcon} skill="MongoDB" />
        <SkillList src={checkIcon} skill="Git-Control" />
        <SkillList src={checkIcon} skill="Render" />
        <SkillList src={checkIcon} skill="Netlify" /> 
    </div>

  </section>
  );
}

export default Skill
