import React from 'react';
import Project from './components/project';
import "./index.css"
import Intro from './components/intro';
import Typewriter from 'typewriter-effect';

const TestProject = { //Testing Props 
    "Title" : "Dynamic Speed Limit Sign",
    "Image" : "https://global.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png",
    "Github" : "https://github.com/"
}

const App = () => {
    return (
        <div className="">
            <Intro/>
        </div>
    );
}

export default App;