import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import resume from "../assets/Resume.pdf"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is <sapn className="highlight_name">Jaivanth</sapn></h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
        <a   href={resume}
        download="Jaivanth React Resume"
        target="_blank"
        rel="noreferrer">
          <button className="Download_btn"> Download Resume</button>
</a>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, Javascript, ReactJS, Redux, GatsbyJs, NextJs, Bootstrap, tailwindCSS, Material UI, NPM, yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL,  MongoDB, DynamoDB, AWS S3, LAMBDA , Appsync ,IAM Role , Amplify
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
