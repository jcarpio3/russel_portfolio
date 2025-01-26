/************************************************************************** 
 * Porfolio Website (React)
 * Date : Nov 14, 2024
 * Created By : Russel Carpio
***************************************************************************/

// Main file imports
import "./index.css"

// Component imports
import {useCookies} from 'react-cookie'
import MainPage from "./components/mainPage";
import Intro from "./components/intro";


const App = () => {
    const [cookies, setCookie] = useCookies(['Visited'])

    //fTime is a check to see if the user has visited before to stop the intro from repeating
    function fTime() {
        if (cookies.Visited){
            console.log("Page was visited")
            return (<div><MainPage/></div>)
        }
        setCookie("Visited", true, {path: "/"});
        return (<div>
            <Intro/> 
            <MainPage/>
        </div>)
    }

    return (
        fTime()
    );
}

export default App;