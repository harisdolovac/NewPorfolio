import React from "react";
import Projects from "./Projects";
import SocialProfiles from "../SocialProfiles";
import profileImage from "../assets/profile.png";
import "../css/App.css";
import { FaCode } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="imagetext_app">
          <h1> Front-end Developer</h1>
          <img src={profileImage} className="profileImage" alt="profile" />
        </div>
        <div className="body_app">
          <div className="descripton_app">
            <h2>Hi, I’m Haris. Nice to meet you.</h2>
            <h4 className="description">
              Programming is fundamentally about creating solutions to problems.
              At the end of the day, you have created something that didn’t
              exist that morning, and that is in and of itself satisfying. While
              constructing the program you constantly expand your understanding
              of both the problem and the solution.
            </h4>
          </div>
          <div className="content">
            <div className="content1">
              <div className="icons_app">
                <FaCode size="80" className="icon_app" />
              </div>
              <h1>Front-end Developer</h1>
              <p>
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>

              <h3>Language and libraries I use:</h3>
              <h4>JavaScript, ReactJs, Redux, HTML, CSS, Sass, Less</h4>
            </div>
            <div className="content2">
              <h2>Dev Tools:</h2>
              <p>Visual Studio IDE</p>
              <p>GitHub</p>
              <p>Gitlab</p>
              <p>Terminal</p>
              <p>Material-UI</p>
              <p>ReactStrap</p>
            </div>
          </div>
        </div>
        <div className="blank"></div>

        <Projects />
      </div>
      <SocialProfiles />
    </>
  );
};

export default App;
