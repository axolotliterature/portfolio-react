import blog from '../img/ahansenblog.png'
import coffee from '../img/ahansencoffee.jpg'
import dicetray from '../img/ahansendndpdfreader.png'
import flappybird from '../img/ahansenflappybirdsg.png'
import listapp from '../img/ahansenlistapp.png'
import mapbox from '../img/ahansenmapbox.jpg'
import narrative from '../img/ahansennarrative.png'
import p5jsgame from '../img/ahansenp5jsgame.png'
import pokedex from '../img/ahansenpokedex.png'
import recipe from '../img/ahansenrecipe.png'
import cloudgate from '../img/Cloud_Gate_Portal.jpg'
import lizardlab from '../img/lizardlab.jpg'
import goodestboy from '../img/thegoodestboysit.jpg'

// NEED IMAGE ALTS

export const projectData = [
    {
        title: "DATA ENTRY: PORTAL",
        tools: "Unreal Engine 5 | Blueprint | C++",
        role: "Game Developer, Gameplay Programmer",
        date: "January-May 2023",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>A VR sci-fi mystery puzzle game built in Unreal Engine 5 that reimagines the 1986 hypertext game and science fiction novel Portal by Rob Swigart. Getting to work with the author to reimagine one of his prized works was such an honor. From the early stages of this project, I was blessed to be involved in the initial brainstorming process for the conceptualization of core concepts that would come to form our united vision for DATA ENTRY: PORTAL. For weeks, we worked meticulously to plan puzzle concepts, pitch story beats, and evaluate the overall visual direction we wanted to achieve.
        <br /><br />
        This was the first project I had worked on that had a proper pre-production stage, and that was difficult to get used to. Consciously slowing down to meticulously plan out every detail for months before we could work on a single aspect of the game in-engine was excruciating, but definitely worth it. By the time we were able to dive in, we only had a couple of months to get the game demo-ready before preparing to hand off the project to the next semester's senior seminar team, but by the last couple of weeks it felt as though our game was flying together. We spent the last week polishing the demo level and preparing documentation to ease the transition to the next team and finally had to take hands off of keyboards, and headsets off our faces. 
        <br /><br />
        About this project, I could detail the aspects I learned about making a VR game, how that differs from other 3D or 2D games, or how I improved using UE5 blueprints to quickly iterate on game mechanics, but realistically I learned the most about working collaboratively across multi-disciplinary teams both remotely and in-person. This was the largest team I had worked on for a single concentrated project, where each task was split amongst entire other teams. This required that each of us really step up and communicate every piece of detail no matter how menial. In particular, this meant overcoming my own anxieties about communicating and bringing attention to myself, and diving in head first to make sure my voice is heard, that my tasks meet others' standards as well as my own, and most importantly that I've made sure to hear others as well. Not that I don't pride myself on being a great listener, but on a project that's as much their baby as mine, it's so much more important to take everyone's input into account, and set my own ego aside.
        </text>,
        image: cloudgate,
        imageAlt: <text>

        </text>,
        repolink: null,
        weblink: "https://dtc-wsuv.org/projects/data-entry-portal/"
    },
    {
        title: "Dice Tray PDF",
        tools: "JavaScript | CSS",
        role: "Web Developer",
        date: "May 2023 - Current",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A browser-based PDF Reader with a collapsible dice roll simulator sidebar built in vanilla JavaScript with Mozilla's PDF.js library. 
            <br /><br />
            I have multiple family members and friends that are DMs for their local D&D groups.They shared a complaint that they were tired of having to switch windows or look away from their computer to roll dice for their play session when hosting with pdfs. Initially, I threw together a simple expandible dice roll simulation that worked in a browser just to conceptualize the idea. The initial concept was pretty well received, so I started reading into how to integrate this into a pdf reader, and decided instead to build my own.
            <br /><br />
            Using the Mozilla PDF.JS library to render the pdf into a canvas element in the browser enabled me to include the expandible “dice tray” over top of the pdf. Rendering the documents through a canvas was pretty easy to get running through their documentation, with the help of some outdated online tutorials. The initial setup examples with pdf.js point to a local directory with the pdf document. There were two major issues I wanted to avoid here, first being that I probably definitely don't have the rights to be hosting official D&D books online, and second is that I don't want to force users to have to submit their own pdfs to a server, or have to edit my code to point at their local files. Therefore, I decided to throw together a file upload system, and used that to pass off the document to the canvas renderer as a pdf object. I simplified the process as much as I possibly could to make the website easy to use. 
            <br /><br />
            Some simple additions drastically improved usability, such as the ability to hide the top bar (along with some minified basic features). The ability to change the zoom levels was another concern that was suggested by some users, so I implemented a basic zoom in/out function by adding a scale value based on the viewport size, and adjusted that value accordingly. I also decided to change the “page x of y” display so that the “x” was a text input field. I made it so that the text input field functioned the same as the simple text display, but if a user types their own input into the field, a function passes that value (after some type checks) into the page renderer, and updates everything as usual. This approach allowed me to retain the same simplified UI while adding more user friendly functionality.

        </text>,
        image: dicetray,
        repolink: "https://github.com/axolotliterature/DnD-PDF-Reader",
        weblink: "https://dicetraypdf.com"
    },
    // {
    //     title: "Portfolio Website",
    //     tools: "React.js | JavaScript",
    //     role: "Web Developer",
    //     date: "February 2024",
    //     subtitle() {
    //         const str = JSON.stringify(this.description);
    //         const strsnip = str.slice(58, 124)+'[...]';
    //         return strsnip;
    //     },
    //     description: <text>
    //         A portfolio built with React.js and JavaScript using react router for navigation and portals to create a modal effect.
    //     </text>,
    //     image: image,
    //     repolink: null,
    //     weblink: null
    // },
    // {
    //     title: "Former Portfolio Website",
    //     tools: "JavaScript",
    //     role: "Web Developer",
    //     date: "April 2023",
    //     subtitle() {
    //         const str = JSON.stringify(this.description);
    //         const strsnip = str.slice(58, 124)+'[...]';
    //         return strsnip;
    //     },
    //     description: <text>
    //         A portfolio built with JavaScript, cards pieced together w/ createElement. Filter by project type.
    //     </text>,
    //     image: image,
    //     repolink: null,
    //     weblink: null
    // },
    {
        title: "PokéAPI Pokédex",
        tools: "React.js | JavaScript",
        role: "Application Developer",
        date: "July 2023",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A Pokédex web application built in React.js with Javascript, using the Pokémon PokéAPI v2.
        </text>,
        image: pokedex,
        repolink: "https://github.com/axolotliterature/pokedex",
        weblink: null
    },
    {
        title: "List Application",
        tools: "React.js | JavaScript",
        role: "Application Developer",
        date: "July 2023",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A simple task-list application built in React using JavaScript.
        </text>,
        image: listapp,
        repolink: "https://github.com/axolotliterature/ListApp",
        weblink: null
    },
    {
        title: "Lizard Lab",
        tools: "Unity | C#",
        role: "Game Developer, Programmer",
        date: "June 2023",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A lizard themed idle game experience designed and created under "mutation" constraints during the June '23 Summer Slow Jam.
        </text>,
        image: lizardlab,
        repolink: null,
        weblink: "https://cmdcstudios.itch.io/lizard-lab"
    },
    {
        title: "TESV:Skyrim Dog Follower Mod",
        tools: "Skyrim Creation Kit",
        role: "Game Developer",
        date: "December 2022",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            This mod creates a learnable spell to summon a conjurable dog as a follower.
        </text>,
        image: goodestboy,
        repolink: null,
        weblink: "https://www.nexusmods.com/skyrim/mods/115972/"
    },
    {
        title: "Blogging Application",
        tools: "C",
        role: "Programmer",
        date: "June 2022",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A text based blogging application built entirely in C that allows users to create, count, search, print, and delete blog entries.
        </text>,
        image: blog,
        repolink: "https://github.com/axolotliterature/blog_C",
        weblink: null
    },
    {
        title: "Flappy Bird Clone",
        tools: "Unity | C#",
        role: "Game Developer",
        date: "March 2022",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A simple clone of the Flappy Bird game built in Unity with C# with input controller, game audio, score controller, collision detection, and moving pipes to introduce an element of difficulty.
        </text>,
        image: flappybird,
        repolink: null,
        weblink: "https://dtc-wsuv.org/ahansen20/flappybird/"
    },
    {
        title: "Generative Ship Shooter Game",
        tools: "JavaScript",
        role: "Game Developer, Programmer",
        date: "May 2021",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A miniature linear ship shooter game that is procedurally generated, built using Javascript in P5.js.
        </text>,
        image: p5jsgame,
        repolink: "https://github.com/axolotliterature/GenerativeShipShooter",
        weblink: "https://dtc-wsuv.org/ahansen20/final477/"
    },
    {
        title: "A Guided Tour of Hogwarts Filming Locations",
        tools: "JavaScript | Mapbox API",
        role: "Web Developer, GIS Developer",
        date: "March 2021",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A web based guided tour of the filming locations for Hogwarts Castle using Mapbox API and HTML5, controlled with Javascript, and styled with CSS3.
        </text>,
        image: mapbox,
        repolink: "https://github.com/axolotliterature/maps",
        weblink: "https://dtc-wsuv.org/ahansen20/map/"
    },
    {
        title: "Coffee: Endangered Species",
        tools: "HTML5 | CSS3",
        role: "Web Developer",
        date: "December 2020",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A basic website built with HTML and CSS that exhibits presentations on the dangers facing coffee plants worldwide. The infographic was made in Adobe Illustrator, and the video was made in Premier Pro and narrated by me.
        </text>,
        image: coffee,
        repolink: null,
        weblink: "https://dtc-wsuv.org/ahansen20/Capstone%20Website/"
    },
    {
        title: "Narrative Skrollr Project",
        tools: "JavaScript | Skrollr",
        role: "Web Developer",
        date: "September 2020",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            This project utilizes the Skrollr paralax scrolling Javascript plugin to create a narrative experience introducing the viewer to The Outsider, from the Dishonored series.
        </text>,
        image: narrative,
        repolink: "https://",
        weblink: "https://dtc-wsuv.org/ahansen20/narrative/"
    },
    {
        title: "Orange Chicken Recipe",
        tools: "HTML5 | CSS3",
        role: "Web Developer",
        date: "October 2020",
        subtitle() {
            const str = JSON.stringify(this.description);
            const strsnip = str.slice(58, 124)+'[...]';
            return strsnip;
        },
        description: <text>
            A simple responsive web page using HTML and CSS media queries to quickly and seamlessly adapt the page layout according to screen size.
        </text>,
        image: recipe,
        repolink: "https://github.com/axolotliterature/recipe",
        weblink: "https://dtc-wsuv.org/ahansen20/recipe/"
    }
]