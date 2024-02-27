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
        description: <text>A VR mystery puzzle game built in Unreal Engine 5 that reimagines the 1986 hypertext game and Science Fiction novel Portal by Rob Swigart.</text>,
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