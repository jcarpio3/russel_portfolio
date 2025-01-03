import Typewriter from 'typewriter-effect';

function tWords(Typer,String,tSpeed,dSpeed,pTime, dAmount, DelAll = false, fastDel = false) {
    Typer.changeDelay(tSpeed).changeDeleteSpeed(dSpeed)
    .typeString(String)
    .pauseFor(pTime)
    if (!DelAll & dAmount > 0){
        Typer.deleteChars(dAmount)
        return
    }
    if (fastDel & DelAll) {
        Typer.callFunction(() => {
            document.getElementsByClassName("Typewriter__wrapper")[0].innerText = " "
        }).pauseFor(200)
        return
    }
    Typer.deleteAll()
}

function deleteIntro() {
    document.getElementById("intro").remove()
}

const Intro = ({}) => {
    return (
        <div className='bg-black overflow-y w-full h-full text-center content-center text-white fixed text-3xl' id="intro">
            <Typewriter onInit={(typewriter) =>{
                typewriter.start()
                
                //Created function to delete redundant code 
                tWords(typewriter,'Console.Writeline("Hello World!")',5,1,1000,-1,true)
                tWords(typewriter,'PrintF("Hello World!")',4,1,500,17)
                tWords(typewriter,'("Hello World!")',4,1,500,0,true,true) 
                tWords(typewriter,'Echo "Hello World!"',3,1,500,0,true,true)
                
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