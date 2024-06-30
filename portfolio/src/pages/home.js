// import face from '../img/hansen-1-4x3.jpg'
import resume from '../documents/andrew-hansen-resume.pdf'

import emailIcon from '../img/icons/mail.png'
import githubIcon from '../img/icons/github.png'
import instagramIcon from '../img/icons/instagram.png'
import linkedinIcon from '../img/icons/linkedin.png'

export default function Home() {
    return <>
    <div className="w-full h-full bg-gray-900 grid">
        <div id="about-header" className="text-center pb-8">
            <h1 className="nothing-font name-title text-gray-300">Andrew Hansen</h1>
            <h3 className="text-cyan-400">Web Developer | Programmer | Game Developer</h3>
            <h3 className="py-2">
                <a className="px-5" href="mailto:andrewhansen.dev@gmail.com"><img src={emailIcon} alt="Email Icon" className="contact-icon" /></a> 
                <a className="px-5" href="https://github.com/axolotliterature" rel="noreferrer noopener" target="_blank"><img src={githubIcon} alt="Github Icon" className="contact-icon" /></a> 
                <a className="px-5" href="https://www.linkedin.com/in/andrewhansen-dev/" rel="noreferrer noopener" target="_blank"><img src={linkedinIcon} alt="LinkedIn Icon" className="contact-icon" /></a>
                <a className="px-5" href="https://www.instagram.com/td.grim/" rel="noreferrer noopener" target="_blank"><img src={instagramIcon} alt="Instagram Icon" className="contact-icon" /></a>
            </h3>
        </div>

        <div id="about-container">
            <div id="about-main" className="grid grid-cols-2 w-10/12 mx-auto"> 
                <div id="about-left" className="">

                    {/* LEFT SIDE FOR INTRO AND CONTACT */}

                    {/* <h1 className="title-font font-medium text-white mb-1">Education</h1> */}
                    <h3 className="text-white">B.A. Digital Technology and Culture</h3>
                    <p>The CMDC of the Department of Digital Technology and Culture</p>
                    <p>Minor in English</p>
                    <p className="pb-5">Washington State University Vancouver</p>

                    <h3 className="text-white">Certification in Game Studies and Design</h3>
                    <p>Washington State University Vancouver</p>
                    
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

                    <p className="pb-2"> Aute non ipsum culpa laborum mollit sunt exercitation. Excepteur occaecat qui anim tempor laboris irure. Cupidatat esse ipsum dolor ad irure enim id ea quis qui elit exercitation proident. Sit ea eiusmod deserunt nostrud eu nulla cillum aute amet ipsum. Adipisicing labore minim sint Lorem ullamco ad magna reprehenderit. Velit commodo labore do non voluptate in ullamco laboris fugiat ut labore. Lorem ullamco fugiat magna minim laborum fugiat commodo duis reprehenderit dolor. </p>

                    <p> Aute non ipsum culpa laborum mollit sunt exercitation. Excepteur occaecat qui anim tempor laboris irure. Cupidatat esse ipsum dolor ad irure enim id ea quis qui elit exercitation proident. Sit ea eiusmod deserunt nostrud eu nulla cillum aute amet ipsum. Adipisicing labore minim sint Lorem ullamco ad magna reprehenderit. Velit commodo labore do non voluptate in ullamco laboris fugiat ut labore. Lorem ullamco fugiat magna minim laborum fugiat commodo duis reprehenderit dolor. </p>

                    <div id="about-right-resume">
                    <h3 className="p-1 text-cyan-400 text-center"><a href={resume} rel="noreferrer noopener" target="_blank">View my CV Resume</a></h3>
                        <div className="exp-block">
                            <div id="" className="exp-left">
                                <p>2024-Present</p>
                            </div>

                            <div id="" className="exp-right">
                                <h3>Experience 1 Title - Company Name</h3>
                                <p>Dolor officia ullamco enim qui qui amet cupidatat eu labore eu ut.</p>
                                <p>Fugiat incididunt id incididunt sunt magna fugiat velit non do minim.</p>
                                <p>Velit eiusmod cupidatat sint ipsum do ad nisi excepteur reprehenderit.</p>
                            </div>
                        </div>

                        <div className="exp-block">
                            <div id="" className="exp-left">
                                <p>2023-2024</p>
                            </div>

                            <div id="" className="exp-right">
                                <h3>Experience 2 Title - Company Name</h3>
                                <p>Dolor officia ullamco enim qui qui amet cupidatat eu labore eu ut.</p>
                                <p>Fugiat incididunt id incididunt sunt magna fugiat velit non do minim.</p>
                                <p>Velit eiusmod cupidatat sint ipsum do ad nisi excepteur reprehenderit.</p>
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