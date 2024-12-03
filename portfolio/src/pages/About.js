import '../assets/door.css';
const About = () =>{
    return(
       
        <div className="wrapper"> 
        <div id="left-door" className="door">
            <div className="shape"></div>
            <div className="shape"></div>
            <div id="left-knob" className="knob"></div>
        </div>
        <div id="right-door" className="door">
            <div className="shape"></div>
            <div className="shape"></div>
            <div id="right-knob" className="knob"></div>
        </div>
    </div>
    
 
    )
}
export default About;