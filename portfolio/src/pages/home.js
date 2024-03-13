import face from '../img/hansen-1-4x3.jpg'

export default function Home() {
    return <>
    <div className="w-full h-full border-2 grid text-center">
        <h1 className="nothing-font name-title text-cyan-600">Andrew Hansen</h1>
        <h2>Programmer</h2>

        <div id="about-container" className="grid grid-cols-2 w-10/12 text-center m-auto">
            <div id="about-left" className="border-4 border-blue-300">
                <h1>Education</h1>
                <p>B.A. in Digital Technology and Culture</p>
                <p>Minor in English</p>
                <p>Certification in Game Studies and Design</p>
                <p>The CMDC of the Department of Digital Technology and Culture</p>
                <p>Washington State University Vancouver</p>
                
                <h1>Proficiencies</h1>
                <h2>Game Development and Design</h2>
                <p>Unreal Engine, C++, Unity, C#, GameMaker, Phaser.js, p5.js, JavaScript</p>

                <h2>Software and Web Development</h2>
                <p>JavaScript, React.js, Node.js, C++, C#, .NET, C, Mapbox API, ArcGIS SDK, HTML5, CSS3</p>

                <h2>Multimedia Creation</h2>
                <p>Adobe: Illustrator, Photoshop, Lightroom, Premiere Pro, Blender, Davinci Resolve, Ableton Live</p>

                <h2>Collaboration and Version Control</h2>
                <p>Github, Perforce Helix Core, Slack, Basecamp, Zoom, OBS Studio</p>
            </div>

            <div id="about-right" className="border-4 border-red-300">
                <img src={face} alt="placeholder" className="m-auto min-w-24 max-w-lg rounded-full shadow-md shadow-gray-500/70" />

            </div>
        </div>
    </div>
    
    </>
}