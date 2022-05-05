
import Navigation from '../components/Navigation/Navigation'
import Home from '../components/Home/Home'
import Project from '../components/Project/Project'
import ProjectData from '../components/Data/project.json'
import Techstack from '../components/Techstack/Techstack';
import Blog from '../components/Blog/Blog';
import BlogData from'../components/Data/blog.json'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
 
const LandingPage= () => {
    return ( 
    <>   
        <Navigation/>
        <Home/>
        <Project ProjectItems={ProjectData}/>
        <Techstack />
        <Blog BlogItemData={BlogData}/>
        <Contact/> 
        <Footer/>  
    </> 

    );
}
 
export default LandingPage;