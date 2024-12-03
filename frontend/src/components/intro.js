import React from "react"
import Typewriter from 'typewriter-effect';

function tWords(Typer,String,tSpeed,dSpeed,pTime, dAmount) {
    Typer.changeDelay(tSpeed).changeDeleteSpeed(dSpeed)
      .typeString(String)
      .pauseFor(pTime)
      .deleteChars(dAmount)
}
function deleteIntro() {
    document.getElementById("intro").remove()
}

const Intro = ({}) => {
    return (
        <div className='bg-black w-full h-full text-center content-center text-white absolute text-3xl' id="intro">
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
                .typeString("Hello World!").pauseFor(1000)
                .deleteChars(1).pauseFor(1000).callFunction(() => {
                    document.getElementById("intro").classList.add("animate-Fadeout");
                    setTimeout(deleteIntro, 5000);
                }).pauseFor(1000).changeDeleteSpeed(150).deleteChars(10)
            }}/>
        </div>
    )
}

export default Intro;