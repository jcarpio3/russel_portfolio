import React from 'react';
import Project from './components/project';
import "./index.css"
const TestProject = { //Testing Props 
    "Title" : "Dynamic Speed Limit Sign",
    "Image" : "https://global.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png",
    "Github" : "https://github.com/"
}

const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-16 bg-gray-800 hover:bg-gray-700">
            <div className="relative w-full max-w-lg">
                <div className="top-0 -left-4 w-0 h-0 tri-angle animate-spinup">

                </div>

            </div>

        </div>
    );
}

export default App;