/************************************************************************** 
 * Porfolio Website (React)
 * Date : Nov 14, 2024
 * Created By : Russel Carpio
***************************************************************************/

// Main file imports
import "./index.css"

// Component imports
import Project from './components/project';
import Intro from './components/intro';


//This was just used to test components but its the base outline for how projects will be shown
const TestProject = { //Testing Props 
    "Title" : "Dynamic Speed Limit Sign",
    "Image" : "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
    "Github" : "https://github.com/"
}

const App = () => {
    return (
        <div className="text-white w-fit text-center items-center justify-center flex">
            <div>
            <Intro/> {/*This is the intro animation component it will delete itself after animation is done*/}
            <div className="">
                <h1>Hi!</h1>
                <h3>I'm Russel</h3>
                <h3>A Full Stack Developer</h3>
            </div>

            <div className="">
                <h3>About Me keep this short btw</h3>
            </div>

            <div className="">
                <h1>---------------------------------</h1>
                <h3>Skills </h3>
            </div>

            <div className="">
                <h1>---------------------------------</h1>
                <h3>Projects</h3>
                <div className="inline-flex flex-wrap ml-[25%] mr-[25%] ">
                    <Project pData={TestProject}/> 
                    <Project pData={TestProject}/>
                    <Project pData={TestProject}/>
                    <Project pData={TestProject}/>
                    <Project pData={TestProject}/>
                    <Project pData={TestProject}/>
                </div>
            </div>

            <div className="">
                <h1>---------------------------------</h1>
                <h3>Education/Experience</h3>
            </div>

            <div className="">
                <h1>---------------------------------</h1>
                <h3>Contacts</h3>
            </div>
            </div>
        </div>
    );
}

export default App;