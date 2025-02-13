import JavaIcon from '../assets/icons/JavaIcon.svg';
import HtmlIcon from '../assets/icons/HtmlIcon.svg';
import CssIcon from '../assets/icons/CssIcon.svg';
import JsIcon from '../assets/icons/JsIcon.svg';
import AngularIcon from '../assets/icons/AngularIcon.svg';
import SpringSecurityIcon from '../assets/icons/SpringSecurityIcon.svg';
import SpringBootIcon from '../assets/icons/SpringBootIcon.svg';
import NodeJsIcon from '../assets/icons/NodeJsIcon.svg';
import JwtAuthIcon from '../assets/icons/JwtAuthIcon.svg';
import TypeScriptIcon from '../assets/icons/TypeScriptIcon.svg';
import ReactJsIcon from '../assets/icons/ReactJsIcon.svg';
import KafkaIcon from '../assets/icons/KafkaIcon.svg';
import RedisIcon from '../assets/icons/RedisIcon.svg';
import MongoDbIcon from '../assets/icons/MongoDBIcon.svg';
import MySQLIcon from '../assets/icons/MySQLIcon.svg';
import DataStructuresIcon from '../assets/icons/DataStructuresIcon.png';
import ComputerNetworkIcon from '../assets/icons/ComputerNetworkIcon.png';
import OperatingSystemIcon from '../assets/icons/OperatingSystemIcon.png';
import SystemDesignIcon from '../assets/icons/SystemDesignIcon.png';
import DBMSIcon from '../assets/icons/DBMSIcon.png';

// aboutMeContent.js
export const ABOUT_ME_TITLE = "Hi, I'm Sagar Kumar";
export const ABOUT_ME_DESCRIPTION =
    "Motivated Software Developer with a passion for crafting innovative and reliable software solutions. Proficient in Java and Spring Boot, and well-versed in React and Node.js, I excel at transforming complex challenges into elegant, efficient solutions. My strong problem-solving and analytical skills are complemented by a continuous desire to learn and adapt to the rapidly evolving tech landscape.";
export const ABOUT_ME_DETAILS =
    "With a focus on clean code, enhancing user experience, and optimizing performance, I thrive in collaborative environments where communication is key. I’m eager to tackle exciting projects that push the boundaries of technology and contribute to creating extraordinary digital experiences. Let’s build something amazing together!";
export const GET_IN_TOUCH_TEXT = "Get in Touch";
export const CONTACT_SECTION_ID = "#contact";

// skill.js
export const skills = [
    {name: 'Java', icon: <img src={JavaIcon} alt="Java" style={{width: '50px', height: '50px',}}/>},
    {name: 'Spring Boot', icon: <img src={SpringBootIcon} alt="Springboot" style={{width: '50px', height: '50px',}}/>},
    {name: 'HTML', icon: <img src={HtmlIcon} alt="HTML" style={{width: '50px', height: '50px',}}/>},
    {name: 'CSS', icon: <img src={CssIcon} alt="CSS" style={{width: '50px', height: '50px',}}/>},
    {name: 'JavaScript', icon: <img src={JsIcon} alt="JavaScript" style={{width: '50px', height: '50px',}}/>},
    {name: 'Angular', icon: <img src={AngularIcon} alt="Angular" style={{width: '50px', height: '50px',}}/>},
    {name: 'Node.js', icon: <img src={NodeJsIcon} alt="node.js" style={{width: '100px', height: '40px',}}/>},
    {name: 'TypeScript', icon: <img src={TypeScriptIcon} alt="typeScript" style={{width: '100px', height: '40px',}}/>},
    {
        name: 'Spring Security 6',
        icon: <img src={SpringSecurityIcon} alt="Spring Security"
                   style={{width: '50px', height: '50px', color: 'green'}}/>
    },
    {
        name: 'JWT Authentication',
        icon: <img src={JwtAuthIcon} alt="JWT Authentication" style={{width: '50px', height: '50px',}}/>
    },
    {name: 'React.js', icon: <img src={ReactJsIcon} alt="React.js" style={{width: '50px', height: '50px',}}/>},
    {name: 'Kafka', icon: <img src={KafkaIcon} alt="Kafka" style={{width: '50px', height: '50px',}}/>},
    {name: 'Redis Cache', icon: <img src={RedisIcon} alt="Redis Cache" style={{width: '50px', height: '50px',}}/>},
    {name: 'MongoDB', icon: <img src={MongoDbIcon} alt="MongoDB" style={{width: '50px', height: '50px',}}/>},
    {name: 'MySQL', icon: <img src={MySQLIcon} alt="MySQL" style={{width: '50px', height: '50px',}}/>},
];

export const coreSkills = [
    {
        name: "Data Structures and Algorithm",
        icon: <img src={DataStructuresIcon} alt="Java" style={{width: '50px', height: '50px',}}/>
    },
    {
        name: "Computer Networks",
        icon: <img src={ComputerNetworkIcon} alt="Java" style={{width: '50px', height: '50px',}}/>
    },
    {
        name: "Operating System",
        icon: <img src={OperatingSystemIcon} alt="Java" style={{width: '50px', height: '50px',}}/>
    },
    {name: "System Design", icon: <img src={SystemDesignIcon} alt="Java" style={{width: '50px', height: '50px',}}/>},
    {
        name: "Database Management System",
        icon: <img src={DBMSIcon} alt="Java" style={{width: '50px', height: '50px',}}/>
    },
]

