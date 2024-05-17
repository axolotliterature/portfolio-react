import face from '../img/hansen-1-4x3.jpg'

export default function Home() {
    return <>
    <div className="w-full h-full bg-gray-900 grid text-center">
        <h1 className="nothing-font name-title text-gray-300">Andrew Hansen</h1>
        <h2 className="text-cyan-600">Programmer</h2>

        <div id="about-container" className="grid grid-cols-2 w-10/12 text-center m-auto">
            <div id="about-left" className="">
                <h1 className="title-font text-lg font-medium text-white mb-1">Education</h1>
                <p className="text-cyan-600">B.A. in Digital Technology and Culture</p>
                <p>The CMDC of the Department of Digital Technology and Culture</p>
                <p>Minor in English</p>
                <p>Certification in Game Studies and Design</p>
                <p className="text-red-800">Washington State University Vancouver</p>
                
                <h1 className="title-font text-lg font-medium text-white mb-1 pt-4">Proficiencies</h1>
                <h2 className="text-cyan-600 pt-3">Game Development and Design</h2>
                <p>Unreal Engine, Unity, C#, GameMaker, Phaser.js, p5.js, JavaScript</p>

                <h2 className="text-cyan-600 pt-3">Software and Web Development</h2>
                <p className="">JavaScript, React.js, Node.js, C#, .NET, Mapbox API, HTML5, CSS3</p>

                <h2 className="text-cyan-600 pt-3">Multimedia Creation</h2>
                <p>Adobe: Illustrator, Photoshop, Lightroom, Premiere Pro, Blender, Davinci Resolve, Ableton Live</p>

                <h2 className="text-cyan-600 pt-3">Collaboration and Version Control</h2>
                <p>Github, Perforce Helix Core, Slack, Basecamp, Zoom, OBS Studio</p>
            </div>

            <div id="about-right" className="">
                <img src={face} alt="placeholder" className="home-portrait m-auto shadow-md shadow-gray-500/70" />

            </div>
        </div>
    </div>
    
    </>
}