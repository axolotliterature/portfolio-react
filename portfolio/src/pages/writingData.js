import creativeCoding1 from '../img/writingimg/creativecoding2_resize_md.jpg'
import creativeCoding2 from '../img/writingimg/4I3jv.png'
import creativeCoding3 from '../img/writingimg/paul-brown_untitled-computer-assisted-drawing-1975.jpg'
import creativeCoding4 from '../img/writingimg/1_oZEnm5nVK2sj856Tt9WR_w.png'
import creativeCoding5 from '../img/writingimg/1_pFJSPa5dEQa95kBSqxP0Bw.gif'


export const writingData = [
    // {
    //     title: "Title One",
    //     subtitle: "Subtitle about project One",
    //     date: "January 2024",
    //     image: "",
    //     imgalt: "",
    //     content: "content for going inside the modal",
    // },
    {
        title: "Creative Coding",
        subtitle: "Poetic Interplay Between Computer Science and Artistic Expression",
        date: "May 2022",
        image: creativeCoding1,
        imgalt: "Creative Coding Examples",
        content: <>
            <h2 className="title-font font-bold text-gray-300 text-center">
                Scratching the surface: A brief history of computing languages
            </h2>
            <br />
            <p>
                In the early days of computing technology, before the dawn of processors that forged the age of the computer, computations were done with a mechanical binary system using gears, wires, or vacuum tubes in a series of on or off positions to process complex computational algorithms. A far cry from the simplicity of <text className="text-pink-500">print</text><text className="text-blue-500">(</text><text className="text-green-500">“Hello, World!”</text><text className="text-blue-500">)</text> of today's modern high level programming languages. Assembly language is a low level programming language developed in the late 1940s that is still in use today. This low level language, I.E. computer language meant only for computers to understand, transitioned away from mechanical binary by allowing these complex instructions to control the computing hardware instead of manually controlling switches and wires, which was very time consuming (Ferguson).
            </p>
            <br />
            <p>
                Even with Assembly language, computer instructions were still somewhat limited in their use to solving complex mathematical computations. Assembly language was a time saver, but was complicated and difficult to read. The desire to bridge the gap between computer language and human language drove the creation of high level programming languages, I.E. computer language meant for humans to understand, which saw developments throughout the 1950s (Nand).
            </p>
            <br />
            <img src={creativeCoding2} alt="Examples of Assembly Language" className="m-auto" />
            <br /><br />
            <h2 className="title-font font-bold text-gray-300 text-center">
                Humble Beginnings: The first computer animation
            </h2>
            <br />
            <p>
                As computers grew in complexity, so too did the possibilities of the programs one could write with computer languages, but due to their complexity and restricted access, most early experiments with creating art with computer language were performed by mathematicians and scientists. In 1963 Edward E. Zajec used a high level programming language called FORTRAN to transfer his ORBIT program onto punch cards, compiled the program with an IBM 7090 series computer, and output the program into a microfilm recorder. Zajec's plan was to use this microfilm output to showcase a theoretical construct in a real-time model and in doing so created what is believed to be the world's first computer animated motion graphic (AT&T Tech Channel).
            </p>
            <br />
            <div className="text-center w-max m-auto">
            <iframe src="https://player.vimeo.com/video/461160240?h=b375c68e25" width="640" height="467" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="First Known Computer Animation"></iframe>
            <p className="text-xs"><a href="https://vimeo.com/461160240">First Known Computer Animation (Edward Zajec, 1963)</a> from <a href="https://vimeo.com/user3661488">floatingcube</a> on <a href="https://vimeo.com">Vimeo</a>.
            </p>
            </div>
            <br />
            <h2 className="title-font font-bold text-gray-300 text-center">
                Experimental Computing: Transforming text into generative art
            </h2>
            <br />
            <p>
                The 1970's saw the embrace of computer generated art begin to widen as artists began to teach themselves how to write computer programs. The Slade School of Art, part of the University of London, had established their 'Experimental and Computing Department' complete with its own computer system. This institution was one of the few at the time attempting to integrate computers in art as a part of its teaching curriculum (The pioneers (1950-1970)). Paul Brown, an Honorary Doctorate in Fine Arts from Slade is one of the pioneers of creative coding. Brown's exploration into using programming language to create digital artworks helped to break the mold of self expression in the artistic realm, instead opting for creating pieces more indicative of “self-generative forms” that were “grounded in the development of processed-based methods for producing images and time-based artworks that responded more closely to the wider world.” (Biswas) The journey into generative art was thus pushed from a walk, to a run.
            </p>
            <br />
            <img src={creativeCoding3} alt="Paul Brown Unassisted Drawing" className="m-auto" />
            <br />
            <h2 className="title-font font-bold text-gray-300 text-center">
                Bridging the Gap: Processing a Creative Medium
            </h2>
            <br />
            <p>
            “The bridge between technology, design, and art has always been in the exploration of tools, and how those tools enable code to become a medium for new forms of expression” (Stinson). Leading into the 2000s, two MIT researchers Ben Fry and Casey Reas wanted to create a solution that made programming more accessible to designers and artists. They inquired “what would it look like for code to become both a creative medium and part of the creative process itself?” (Stinson). Together they created an open-source software called Processing, in which users could utilize a simplified version of the Java programming language to create interactive graphics. This digital sketchbook was a successful amalgamation of computer science and visual arts, and amassed an ever growing community around it. Processing continued to grow as contributors rose into the thousands, and before long there were many more alternatives and advancements rising to the call. 
            <br /><br />
            In an interview discussing the creation of Processing, Reas states that “If you were learning computer programming... You were only working with text and math, and for visual people—people who are about the sensation of aesthetics—working in those classes, you would either stay for a few weeks and leave, or you would stay for a year and you'd be in pain” (Stinson). The learning process for the fundamentals of programming languages, it seems, exists as a painful barrier of entry into the world of coding for those on the more creative side of computer development. McLuhan claims that “anti-environments, or countersituations made by artists, provide means of direct attention and enable us to see and understand more clearly” (McLuhan 69-72). Processing, with its combination of programming language and artistic expression, managed to achieve a point of access where coders are able to express creative visual art, while also teaching designers and curious newcomers how to write and deploy creative computer programs, indirectly teaching the same foundations of computer science which previously served barrier to entry.
            </p>
            <br />
            <img src={creativeCoding4} alt="Example of Processing" className="m-auto"/>
            <br />
            <h2 className="title-font font-bold text-gray-300 text-center">
                Scripts.js: Transforming the Text of Programing Language Into Expressive Movements
            </h2>
            <br />
            <p>
            By the late 2000's, the once popular Java applets had begun to see a decline in browser support and the Java language was following suit. Javascript, which has no relation to Java, saw a rise in popularity as the language grew in capability and efficiency. Java applets require external support to run in the web browser much like Flash, whereas Javascript is understood natively by the browser. This gave Javascript an edge in security, as well as run time efficiency. Javascript, which started out as an insignificant toy language, is currently the dominant language of the web (Leung). Due to the decline of Java and the rise of Javascript, projects like processing.js emerged which served as a transpiler for Processing, taking the Java inputs and translating the output to Javascript which can then be interpreted by the browser. 
            <br /><br />
            The transpiler approach of processing.js, however was inefficient and soon emerged p5.js. P5.js is an open source Processing software that runs entirely in Javascript. According to the p5.js website, “p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else” (home | p5.js). Being that p5.js runs entirely in Javascript, the web browser itself becomes the sketchbook and the library all in one. With the tools now becoming easier to access and simpler to learn, creative coding was ready for a massive leap forward. Projects and softwares based off the Processing libraries much like p5.js began to tackle more advanced creative visualizations, such as OPENRNDR, or Babylon.js. OPENRNDR is a Java framework based on Processing and is built around the concept of hardware accelerated graphical rendering with creative coders in mind. This framework “focuses on providing simple and safe APIs for building interactive applications” (Openrndr). A powerful tool for creating user interfaces and immersive experiences. 
            </p>
            <br />
            <img src={creativeCoding5} alt="Exmaple GIF of OPENRNDR" className="m-auto" />
            <br />
            <div className="text-center w-max m-auto">
            <iframe src="https://player.vimeo.com/video/362256264?h=e482e16ce5&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="OPENRNDR Workshop Showreel"></iframe>
            <p className="text-xs">
                <a href="https://vimeo.com/362256264">OPENRNDR workshop showreel</a> from <a href="https://vimeo.com/rndrstudio">RNDR</a> on <a href="https://vimeo.com">Vimeo</a>.
            </p>
            </div>
            <br />
            <p>
                Babylon.js on the other hand is built entirely in Javascript from the core of Processing. Babylon.js transforms code into beautifully advanced Physically Based Rendering, or PBR, 3D environments complete with particle systems, sprite editors, and post processing effects, all of which can be rendered natively within the web browser.
            </p>
            <br />
            <div className="text-center">
            <a href="https://playground.babylonjs.com/#LPTLZM" rel="noreferrer noopener" target="_blank" className="text-sky-400">Babylon.js Playground Under Water Demo</a>
            <br />
            <a href="https://www.babylonjs-playground.com/frame.html#KEKCLV" rel="noreferrer noopener" target="_blank" className="text-sky-400">Babylon.js Playground Solar System Demo</a>
            </div>
            <br />
            <p>
                Creative coding has evolved from a marriage of computer science and artistic expression. The technology that leads the way through the digital age, the very same textual backbone that dominates the framework of the digital workforce, now utilized in a dramatically opposing context creates algorithmically generated artworks, immersive 3D gallery experiences, interactive websites, and explorations into alternate realities. In an article on the artistic world of creative coding, writer and technologist Jun Wu is quoted explaining that “creative coders search for meaning in both the creative universe and the logical universe. They delve deep into the subjects that they work with. They end up becoming great programmers. A lot of their projects are software projects” (Alexander). Creative coding manifests a point of access to otherwise technologically landlocked forms of new language and opens it up to a virtual ocean of visual expression. Creative coding has harnessed the power of programming languages to generate a new world of digital exploration into artistic creation.
            </p>
            <br />
            <div className="text-center w-max m-auto">
            <iframe src="https://player.vimeo.com/video/16166916?h=8b3b81d1f0" width="640" height="480" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Processing Installation"></iframe>
            <p className="text-xs">
                <a href="https://vimeo.com/16166916">Processing Installation</a> from <a href="https://vimeo.com/user4964051">SLIGHTLY MAD</a> on <a href="https://vimeo.com">Vimeo</a>.
            </p>
            </div>
            <br /><br />
            <h2 className="title-font font-bold text-gray-300 text-center">
                Works Cited
            </h2>
            <br />
            <p>
                Alexander, Donovan. “Everything You Need to Know about the Artistic World of Creative Coding.” Interesting Engineering, Interesting Engineering, 10 Nov. 2020, https://interestingengineering.com/everything-you-need-to-know-about-the-artistic-world-of-creative-coding. 
                <br /><br />
                “AT&T Tech Channel.” AT&T Archives: Simulation of a Two-Gyro Gravity-Gradient Attitude Control System, https://techchannel.att.com/playvideo/2012/07/18/AT&T-Archives-First-Computer-Generated-Graphics-Film. 
                <br /><br />
                Biswas, Allie. “Paul Brown: Process, Chance and Serendipity: Art That Makes Itself.” Studio International: Visual Arts, Design and Architecture, 4 Sept. 2018, https://www.studiointernational.com/index.php/paul-brown-process-chance-serendipity-art-that-makes-itself-review-national-academy-sciences-washington. 
                <br /><br />
                Ferguson, Andrew. “A History of Computer Programming Languages.” A History of Computer Programming Languages, 2000, https://cs.brown.edu/~adf/programming_languages.html. 
                <br /><br />
                Home | p5.Js, https://p5js.org/. 
                <br /><br />
                Leung, Catherine. Introduction to P5.Js, https://cathyatseneca.gitbooks.io/introduction-to-p5-js/content/. 
                <br /><br />
                McLuhan, Marshall. The Medium Is the Massage: An Inventory of Effects, Gingko Press, Berkeley, CA, 2017, pp. 69-72. 
                <br /><br />
                Openrndr. “What Makes OPENRNDR Different from Other Frameworks for Creative Coding?” Medium, OPENRNDR, 4 June 2018, https://medium.com/openrndr/what-makes-openrndr-different-from-other-frameworks-for-creative-coding-12b4919b0a49. 
                <br /><br />
                Nand, Krishna. “The Evolution of Programming Languages.” GeeksforGeeks, 28 Jan. 2021, https://www.geeksforgeeks.org/the-evolution-of-programming-languages/. 
                <br /><br />
                “The Pioneers (1950-1970).” A History of Computer Art, Victoria and Albert Museum, 17 July 2013, http://www.vam.ac.uk/content/articles/a/computer-art-history/. 
                <br /><br />
                Stinson, Liz. “Processing: The Software That Shaped Creative Coding.” Eye on Design, 28 Oct. 2021, https://eyeondesign.aiga.org/processing-the-software-that-shaped-creative-coding/. 
            </p>




        </>,

        
    },
]