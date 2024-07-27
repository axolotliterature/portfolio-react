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
                    
                    <p className="pb-5"> As a lifelong tinkerer, I've had an interest in computers and electronics since I was a child. From building custom PCs, to modifying game files, I've casually stoked a life-long interest in computers. Like many others, I had an introduction to HTML through customizing social media pages, an introduction to JavaScript by early web-based games, and an introduction to command line by bricking my parents' computer more than a few times before I got it right. Fortunately, we still had the boot CD. Sorry Mom. Despite focusing on Information Technology for my Associates Degree I remained somewhat casual in my approach to technology, instead being driven by a love of cars through a career as an automotive technician. When I felt the call to pursue a new profession that allowed for further personal growth, I found myself returning to school to complete my Bachelors in Digital Technology with a focus on Web and Game Development.</p>

                    <p className="pb-5">After graduating from WSU in 2023 I took some time to focus on a few personal projects, taking some detours along the way to try out many different languages and frameworks to see what I liked best. Despite bouncing back and forth between C# and Python, I found myself continuously returning to JavaScript and its plethora of libraries and frameworks for the majority of my projects. I am excited to continue learning new skills and technologies, and exploring new ways of storytelling and expression through games and software. However, I am also eager to join a team that encourages personal growth and enables me to hone valuable professional skills, where I can put my curiosity and expertise to use contributing to a wider goal.
                    </p>

                </div>

                <div id="about-right" className="">

                    {/* RIGHT SIDE FOR EXPERIENCE BRIEF AND RESUME LINK */}

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
                                <h3 className="text-white">CAD Programmer - D&D Home Interiors</h3>
                                <p>Pushed to streamline internal communication channels via the introduction of new technologies and strategies. Assisted in the identication and reduction of pre-production bottlenecks. Create clean and concise process documentation. Evaluate, test, and debug programs to ensure performance and accuracy. Manage API integrations to maximize application efficiency. EOTM October 2023</p>
                            </div>
                        </div>

                        <div className="exp-block">
                            <div className="exp-left">
                                <p className="text-gray-600">2023 - 2023</p>
                            </div>

                            <div className="exp-right">
                                <h3 className="text-white">Gameplay Programmer - DATA ENTRY: PORTAL</h3>
                                <p>Engaged heavily in the game design pre-production cycle, proactively prototyping new ideas and solutions which helped our team rocket from
                                conceptualization to playable demo in only four months. Sequenced animations for puzzles, UI updates, and particle effects. Programmed scriptable object events for level transitions and puzzle interactions. Implemented player interactions and locomotion.</p>
                            </div>
                        </div>

                        <div className="exp-block">
                            <div className="exp-left">
                                <p className="text-gray-600">2014 - 2020</p>
                            </div>

                            <div className="exp-right">
                                <h3 className="text-white">Automotive Technician - Subaru of America Dealerships</h3>
                                <p>ASE Certified Specialist for Engine, Transmission, Brake, and Electrical diagnostic and repair. Subaru of America Certified Boxer Engines Specialist, Transmissions Specialist. Collaboration with Subaru of America engineers for product quality monitoring. Read and interpret advanced schematics and wiring diagrams to efficiently reach diagnosis and accurately propose recommended repairs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
}