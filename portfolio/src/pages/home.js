import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from  '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import resume from '../documents/andrew-hansen-resume.pdf'

export default function Home() {
    return <>
    <div className="w-full h-full bg-gray-900 grid">
        <div id="about-header" className="text-center pb-8">
            <h1 className="nothing-font name-title text-gray-300">Andrew Hansen</h1>
            <h3 className="text-cyan-400 pb-1">Web Developer | Programmer | Game Developer</h3>
            <h3 className="py-2">
                <a className="px-5" href="mailto:andrewhansen.dev@gmail.com"><FontAwesomeIcon icon={faSquareEnvelope} /></a> 
                <a className="px-5" href="https://github.com/axolotliterature" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /></a> 
                <a className="px-5" href="https://www.linkedin.com/in/andrewhansen-dev/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="px-5" href="https://www.instagram.com/td.grim/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            </h3>
        </div>

        <div id="about-container">
            <div id="about-main" className="grid grid-cols-2 w-10/12 mx-auto"> 
                <div id="about-left" className="">

                    {/* LEFT SIDE FOR INTRO AND CONTACT */}

                    {/* <h1 className="title-font font-medium text-white mb-1">Education</h1> */}
                    
                    <p className="pb-5"> Aute non ipsum culpa laborum mollit sunt exercitation. Excepteur occaecat qui anim tempor laboris irure. Cupidatat esse ipsum dolor ad irure enim id ea quis qui elit exercitation proident. Sit ea eiusmod deserunt nostrud eu nulla cillum aute amet ipsum. Adipisicing labore minim sint Lorem ullamco ad magna reprehenderit. Velit commodo labore do non voluptate in ullamco laboris fugiat ut labore. Lorem ullamco fugiat magna minim laborum fugiat commodo duis reprehenderit dolor. </p>

                    <p> Aute non ipsum culpa laborum mollit sunt exercitation. Excepteur occaecat qui anim tempor laboris irure. Cupidatat esse ipsum dolor ad irure enim id ea quis qui elit exercitation proident. Sit ea eiusmod deserunt nostrud eu nulla cillum aute amet ipsum. Adipisicing labore minim sint Lorem ullamco ad magna reprehenderit. Velit commodo labore do non voluptate in ullamco laboris fugiat ut labore. Lorem ullamco fugiat magna minim laborum fugiat commodo duis reprehenderit dolor. </p>
                    
                    {/* <h1 className="title-font font-medium text-white mb-1 pt-4">Proficiencies</h1>
                    <h3 className="text-cyan-600 pt-3">Game Development and Design</h3>
                    <p>Unreal Engine, Unity, C#, GameMaker, p5.js, JavaScript</p>

                    <h3 className="text-cyan-600 pt-3">Software and Web Development</h3>
                    <p className="">JavaScript, React.js, Node.js, C#, .NET, HTML5, CSS3</p>

                    <h3 className="text-cyan-600 pt-3">Multimedia Creation</h3>
                    <p>Adobe: Illustrator, Photoshop, Lightroom, Premiere Pro, Blender, Davinci Resolve, Ableton Live</p>

                    <h3 className="text-cyan-600 pt-3">Collaboration and Version Control</h3>
                    <p>Github, Perforce Helix Core, Slack, Basecamp, Zoom, OBS Studio</p> */}

                </div>

                <div id="about-right" className="">

                    {/* RIGHT SIDE FOR EXPERIENCE BRIEF AND RESUME LINK */}
                    {/* as a lifelong tinkerer... former career mechanic,  */}

                    <h3 className="text-white">B.A. Digital Technology and Culture</h3>
                    <p>The CMDC of the Department of Digital Technology and Culture</p>
                    <p>Minor in English</p>
                    <p className="pb-5">Washington State University Vancouver</p>

                    <h3 className="text-white">Certification in Game Studies and Design</h3>
                    <p className="pb-5">Washington State University Vancouver</p>

                    <div id="about-right-resume">
                        <div id="scroll-down"><FontAwesomeIcon icon={faChevronDown} /></div>


                    <h3 className="pb-5 text-cyan-400 text-center"><a className="pr-2" href={resume} rel="noreferrer noopener" target="_blank">View Full Resume</a><FontAwesomeIcon icon={faCloudArrowDown} /></h3>

                        <div className="exp-block">
                            <div className="exp-left">
                                <p className="text-gray-600">2024 - Present</p>
                            </div>

                            <div className="exp-right">
                                <h3>CAD Programmer - D&D Home Interiors</h3>
                                <p>Pushed to streamline internal communication channels via the introduction of new technologies and strategies. Assisted in the identication and reduction of pre-production bottlenecks. Create clean and concise process documentation. Evaluate, test, and debug programs to ensure performance and accuracy. Manage API integrations to maximize application efficiency. EOTM October 2023</p>
                            </div>
                        </div>

                        <div className="exp-block">
                            <div className="exp-left">
                                <p className="text-gray-600">2023 - 2023</p>
                            </div>

                            <div className="exp-right">
                                <h3>Gameplay Programmer - DATA ENTRY: PORTAL</h3>
                                <p>Engaged heavily in the game design pre-production cycle, proactively prototyping new ideas and solutions which helped our team rocket from
                                conceptualization to playable demo in only four months. Sequenced animations for puzzles, UI updates, and particle effects. Programmed scriptable object events for level transitions and puzzle interactions. Implemented player interactions and locomotion.</p>
                            </div>
                        </div>

                        <div className="exp-block">
                            <div className="exp-left">
                                <p className="text-gray-600">2014 - 2020</p>
                            </div>

                            <div className="exp-right">
                                <h3>Automotive Technician - Subaru of America Dealerships</h3>
                                <p>ASE Certified Specialist for Engine, Transmission, Brake, and Electrical diagnostic and repair. Subaru of America Certified Boxer Engines Specialist, Transmissions Specialist. Collaboration with Subaru of America engineers for product quality monitoring. Read and interpret advanced schematics and wiring diagrams to efficiently reach diagnosis and accurately propose recommended repairs.</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

            {/* <div id="about-bottom" className="mx-auto w-10/12 text-center pt-10">

                <h2 className="text-white text-2xl font-medium underline">Contact</h2>

                <h3 className="p-1 text-cyan-500"><a href="mailto:andrewhansen.dev@gmail.com">Email</a></h3>

                <h3 className="p-1 text-sky-500"><a href="https://github.com/axolotliterature" rel="noreferrer noopener" target="_blank">Github</a></h3>

                <h3 className="p-1">Find me on <a className="text-blue-500" href="https://www.linkedin.com/in/andrewhansen-dev/" rel="noreferrer noopener" target="_blank">Linkedin</a></h3>

                <h3 className="p-1 text-indigo-500"><a href={resume} rel="noreferrer noopener" target="_blank">View my CV Resume</a></h3>

            </div> */}
        </div>
    </div>
    
    </>
}