import React, { useState } from 'react';
import Modal from "../Modal"
import { projectData } from './projectData';

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    const [modProj, setModProj] = useState(1)

    function handleOpen(project) {
        setIsOpen(true)
        setModProj(project)
    }

    function handleClose() {
        setIsOpen(false)
    }

    return (
        <>

    <div>
        <Modal open={isOpen} project={modProj} onClose={() => handleClose()}>
            <div className="text-gray-400 bg-gray-900 rounded-md body-font container px-5 py-8 mx-auto text-center lg:px-40">
                <div className="flex relative w-full h-1/4">
                    <div className="px-2 py-5 relative z-10 w-full border-4 border-gray-800 rounded-md bg-gray-900">
                    <img
                        alt="gallery"
                        className=" inset-0 w-full h-50 object-cover object-center rounded-md"
                        src={modProj.image}
                    />
                        <h2 className="tracking-widest title-font font-medium text-cyan-400 my-1">
                            {modProj.tools}
                        </h2>
                        <h1 className="title-font font-medium text-white mb-1">
                            {modProj.title}
                        </h1>
                        <p className="mb-2 pb-2 border-b-4 rounded-md border-gray-800">
                            <a href={modProj.weblink} className="mr-2 text-cyan-600"
                                rel="noreferrer noopener" target="_blank">
                                    Web Link
                            </a>
                            <a href={modProj.repolink} className="ml-2 text-cyan-600"
                                rel="noreferrer noopener" target="_blank">
                                    Github Link
                            </a>
                        </p>
                        <h2 className="text-gray-400 title-font font-medium mb-1">
                            {modProj.role}
                        </h2>
                        <p className="leading-relaxed text-left">
                            {modProj.description}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    </div>

    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    My Projects
                </h1>
                <p className="mx-auto leading-relaxed">
                    As a programmer, although my focus is primarily in games and web development, I enjoy tinkering and programming in many different ways. Below is a non-exhaustive list of some of my projects. I enjoy learning new technologies and experimenting with various SDKs and APIs, such as my GIS MapBox project, my Skyrim dog follower mod, or my Dice Roll simulator PDF reader. Within some of my projects I also have various videos and art that I've created, such as my website detailing coffee's threat of extinction. I have also had the pleasure of working on teams with extraordinarily talented peers for some of my larger projects such as DATA ENTRY: PORTAL, a Sci-Fi Mystery VR game! Whether I'm setting out with a team or flying solo, my aim on every project is to challenge myself and learn something new.
                    </p> 
                    <p>Thanks for checking out my projects, don't forget to be awesome! 
                </p>
            </div>

{/* is this div needed? */}
            <div>
                <div className="flex flex-wrap m-4">
                    {projectData.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                                <button onClick={() => handleOpen(project)}>
                                    <div className="flex relative w-50 h-60">
                                        <img
                                            alt="gallery"
                                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                                            src={project.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 rounded-md bg-gray-900 opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">
                                                {project.tools}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                                {project.title}
                                            </h1>
                                            <p className="leading-relaxed">
                                                {project.subtitle()}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>

    </>
    )
}