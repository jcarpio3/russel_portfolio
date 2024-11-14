import React from 'react';
import Test from './components/Test';
import "./index.css"
const TestProject = { //Testing Props 
    "Title" : "Dynamic Speed Limit Sign",
    "Image" : "https://global.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png",
    "Github" : "https://github.com/"
}

const App = () => {
    return (
        <div >
            <h1>Hello World</h1>
            <Test tProp={TestProject}/>
        </div>
    );
}

export default App;