import './Project.css';
import React from 'react';
import pair from '../../assets/pair.png';
import portfolio from '../../assets/Portfolio.png';
import spotify from "../../assets/Spotify.png";
import landPage from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Project() {
  return (
    <section className='container' >
        <h1 className='Title'>Projects</h1>
        <div className='projects' >
            <ProjectCard 
             src={pair}
             link="https://pair11.netlify.app/"
             h3="Pair"
             p="Full-Stack Dynamic Interface"
            />

            <ProjectCard 
             src={portfolio}
             link="https://arpitsaxena11.github.io/arpitsaxena.portfolio.io/"
             h3="Portfolio"
             p="Interactive, Responsive, Elegant."
            />

            <ProjectCard 
             src={spotify}
             link=""
             h3="Spotify lite"
             p="Simple Interactive Interface"
            />

            <ProjectCard 
             src={landPage}
             link="https://www.linkedin.com/posts/arpit-sna_internship-codsoft-learningskills-activity-7226457046529798144-3uC0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7cgrYB7nUt4iEzuOCt5G1fP_qhoNrazvw"
             h3="Landing Page"
             p="Responsive Sliding Features"
            />

        </div>
    </section>
  )
}

export default Project
