
import {
    
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    
    react,
    redux,
    flutterflow,
    
    
    tailwindcss,
    
    typescript,
    flask,
    wordpress,
    python,
    reactNative,
    Slogo,
    dzpetcarelogo,
    civlogo,
    tblogo
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: flask,
        name: "flask",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: wordpress,
        name: "WordPress",
        type: "Development",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: reactNative,
        name: "reactNative",
        type: "App Development",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: flutterflow,
        name: "flutterflow",
        type: "App development",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "DZ Petcare",
        icon: dzpetcarelogo,
        iconBg: "#accbe1",
        date: "May 2023",
        points: [
            "Developed and maintained the DZ Petcare website, showcasing comprehensive local pet care services.",
            "Implemented features for displaying services ranging from daily walks to overnight pet sitting.",
            "Highlighted the affordability, professionalism, and compassionate approach to pet care on the website.",
            "Ensured website's responsiveness and user-friendly navigation to enhance user experience.",
        ],
        
    },
    {
        title: "Web Developer",
        company_name: "Civ Car Care",
        icon: civlogo,
        iconBg: "#4A90E2",
        date: "may 2023",
        points: [
            "Led the development of the Civ Car Care website, focusing on exceptional auto collision repair services.",
            "Showcased the companys expertise in collision repair, bodywork, and paint services for various vehicles.",
            "Integrated features to highlight customer satisfaction, personalized repair solutions, and social media engagement.",
            "Implemented a user-friendly interface to promote the convenience of their location and services.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "The Sicklers Brand",
        icon: Slogo,
        iconBg: "#E53E3E",
        date: "March 2023",
        points: [
            "Contributed to the development of The Sicklers Brand website, advocating through medical wear.",
            "Created a platform to educate on sickle cell disease and contribute towards finding a cure.",
            "Integrated an e-commerce module for purchasing scrubs, with proceeds supporting awareness and those affected by the disease.",
            "Enabled features for visitors to donate and support the brand's mission, enhancing website engagement.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/brygulley25',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bryson-gulley-245bab195',
    },
    {
        name: 'Digital Business Card',
        iconUrl: tblogo, 
        link: 'https://mycrd.is/DivineDesignllc',
    },
];

export const projects = [
    {
        iconUrl: "./moviereview.gif",
        theme: 'btn-back-red',
        name: "Full stack app",
        description: "web application that allows users to search for and read reviews of movies, write their own reviews.",
        link: "https://movie-review-8h71.onrender.com/",
    },
    {
        iconUrl: "./reactadmindash.gif",
        theme: 'btn-back-blue',
        name: "React Admin Dash",
        description: "React Admin Dashboard with real time data coded from scratch.",
        link: "https://bricethedeveloper.netlify.app/",
    },
    {
        iconUrl: "./rockets.gif",
        theme: 'btn-back-green',
        name: "Acme Rockets project",
        description: "Responsive landing page made with Tailwind Css.",
        link: "https://acme-rockets-axai.onrender.com/",
    },
    {
        iconUrl: "./frontendbootcamp.gif",
        theme: 'btn-back-blue',
        name: "Frontend Bootcamp project",
        description: "This simple React project makes use of props and state to manage the data displayed on the page.",
        link: "https://frontend-bootcamp3.onrender.com/",
    },
    {
        iconUrl: "./crashcourse.gif",
        theme: 'btn-back-teal',
        name: "React Native App",
        description: "Job search app where you can press a job and apply.",
        link: "https://expo.dev/@brygulley25/crashcourse?serviceType=classic&distribution=expo-go",
    }
];