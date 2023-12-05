import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text,link, btnText}) => (
    <div className="info-box"> <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn"> {btnText} <img src={arrow} className="w-4 h-4 object-contain"/> </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className="sm;text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi, I am <span className='font-semibold'> Bryson Gulley</span>
        <br/>
        I used to hoop, Now i code and design.
        </h1>
    ),
    2: (
        <InfoBox text = "Day by day Picking up many skills along the way"
            link="/about"
            btnText="Come Find Out"
        />
    ),
    3: (
        <InfoBox text = "See my skills, visit my digital business card for all links "
            link="/projects"
            btnText="Take me there"
        />
    ),
    4: (
        <InfoBox text = "Follow me and be apart of my journey going forward"
            link="/contact"
            btnText="Not hard to find"
        />
    )

}

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo