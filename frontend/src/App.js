import React from 'react';
import Project from './components/project';
import "./index.css"
import Typewriter from 'typewriter-effect';

const TestProject = { //Testing Props 
    "Title" : "Dynamic Speed Limit Sign",
    "Image" : "https://global.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png",
    "Github" : "https://github.com/"
}
function tWords(Typer,String,tSpeed,dSpeed,pTime, dAmount) {
    Typer.changeDelay(tSpeed).changeDeleteSpeed(dSpeed)
      .typeString(String)
      .pauseFor(pTime)
      .deleteChars(dAmount)
}

const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-16 bg-gray-800 hover:bg-gray-700">
            <div className="relative w-full max-w-lg" id='gay'>
                <div className='bg-black w-full h-full flex text-white items-center mr-auto text-center justify-center box' id="intro">
                    <Typewriter onInit={(typewriter) =>{
                        typewriter.start()
                        tWords(typewriter,'Console.writeline("Hello World!")',5,5,1000,20)
                        typewriter.callFunction(() => {
                            document.getElementsByClassName("Typewriter__wrapper")[0].innerText = ""
                        })
                        tWords(typewriter,'PrintF("Hello World!")',4,4,500,17)
                        tWords(typewriter,'("Hello World!")',4,4,400,11)
                        typewriter.callFunction(() => {
                            document.getElementsByClassName("Typewriter__wrapper")[0].innerText = ""
                        })
                        tWords(typewriter,'Echo "Hello World!"',3,3,200,11)
                        typewriter.callFunction(() => {
                            document.getElementsByClassName("Typewriter__wrapper")[0].innerText = ""
                        })
                        typewriter.changeDelay(1).changeDeleteSpeed(50)
                        .typeString("Hello World!")
                        .deleteChars(1)
                        .callFunction(() => {
                            document.getElementById("intro").classList.add("transition-opacity")
                        })
                    }}/>
                </div>
            </div>

        </div>
    );
}

export default App;