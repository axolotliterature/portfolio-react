import face from '../img/hansen-1-4x3.jpg'
import resume from '../documents/andrew-hansen-resume.pdf'

export default function Home() {
    return <>
    <div className="w-full h-full bg-gray-900 grid text-center">
        <h1 className="nothing-font name-title text-gray-300">Andrew Hansen</h1>
        <h2 className="text-cyan-600">Game Developer | Software Engineer | Web Developer</h2>
        <p className="text-gray-600 pb-3">Looking for a junior developer/engineer role so that I can *karate chops the air* continue perfecting my craft.</p>

        <div id="about-container">
            <div id="about-top" className="grid grid-cols-2 w-10/12 text-center mx-auto"> 
                <div id="about-left" className="">
                    <h1 className="title-font font-medium text-white mb-1">Education</h1>
                    <p className="text-cyan-600">B.A. in Digital Technology and Culture</p>
                    <p>The CMDC of the Department of Digital Technology and Culture</p>
                    <p>Minor in English</p>
                    <p>Certification in Game Studies and Design</p>
                    <p className="text-red-800">Washington State University Vancouver</p>
                    
                    <h1 className="title-font font-medium text-white mb-1 pt-4">Proficiencies</h1>
                    <h2 className="text-cyan-600 pt-3">Game Development and Design</h2>
                    <p>Unreal Engine, Unity, C#, GameMaker, p5.js, JavaScript</p>

                    <h2 className="text-cyan-600 pt-3">Software and Web Development</h2>
                    <p className="">JavaScript, React.js, Node.js, C#, .NET, HTML5, CSS3</p>

                    <h2 className="text-cyan-600 pt-3">Multimedia Creation</h2>
                    <p>Adobe: Illustrator, Photoshop, Lightroom, Premiere Pro, Blender, Davinci Resolve, Ableton Live</p>

                    <h2 className="text-cyan-600 pt-3">Collaboration and Version Control</h2>
                    <p>Github, Perforce Helix Core, Slack, Basecamp, Zoom, OBS Studio</p>
                </div>

                <div id="about-right" className="">
                    <img src={face} alt="placeholder" className="home-portrait m-auto shadow-md shadow-gray-500/70" />
                </div>
            </div>

            <div id="about-bottom" className="mx-auto w-10/12 text-center pt-10">

                <h2 className="text-white text-2xl font-medium underline">Contact</h2>

                <h3 className="p-1 text-cyan-500"><a href="mailto:andrewhansen.dev@gmail.com">Email</a></h3>

                <h3 className="p-1 text-sky-500"><a href="https://github.com/axolotliterature" rel="noreferrer noopener" target="_blank">Github</a></h3>

                <h3 className="p-1">Find me on <a className="text-blue-500" href="https://www.linkedin.com/in/andrewhansen-dev/" rel="noreferrer noopener" target="_blank">Linkedin</a></h3>

                <h3 className="p-1 text-indigo-500"><a href={resume} rel="noreferrer noopener" target="_blank">View my CV Resume</a></h3>

            </div>
        </div>
    </div>
    
    </>
}