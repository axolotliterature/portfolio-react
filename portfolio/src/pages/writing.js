import React, { useState } from 'react';
import Modal from '../Modal';
import { writingData } from './writingData';


export default function Writing() {
    const [isOpen, setIsOpen] = useState(false)
    const [modContent, setModContent] = useState(1)

    function handleOpen(content) {
        setIsOpen(true)
        setModContent(content)
    }

    function handleClose() {
        setIsOpen(false)
    }

    return (
        <>
        <div>
            <Modal open={isOpen} project={modContent} onClose={() => handleClose()}>
                <div className="text-gray-400 bg-gray-900 rounded-md body-font container px-5 py-8 mx-auto text-center lg:px-40">
                    <div className="flex relative w-full h-1/4">
                        <div className="px-2 py-5 relative z-10 w-full border-4 border-gray-800 rounded-md bg-gray-900">
                        <img
                            alt="gallery"
                            className=" inset-0 w-full h-50 object-cover object-center rounded-md"
                            src={modContent.image}
                        />
                            <h1 className="title-font font-medium text-white mb-1">
                                {modContent.title}
                            </h1>
                            <h2 className="tracking-widest title-font font-medium text-cyan-400 my-1 mb-2 pb-2 border-b-4 rounded-md border-gray-800">
                                {modContent.subtitle}
                            </h2>
                            <p className="leading-relaxed text-left">
                                {modContent.content}
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
        
{/* START OF INTRO HEADER BLURB */}
        <section id="writings" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px5 py-10 mx-auto text-center lg:px-40">
                <div className=" flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl font-medium title-font mb-4 text-white">
                        My Writing
                    </h1>
                    {/* <p className="lg:w2/3 mx-auto leading-relaxed">
                        Blurb on writing goes here
                    </p> */}
                </div>

{/* START OF CONTENT GALLERY FOR CARDS */}
                <div className="mightnotneedthisdiv">
                    <div className="flex flex-wrap m-4">
                        {writingData.map((content) => (
                            <a
                                href={content.link}
                                key={content.image}
                                className="sm:w-1/2 w-100 p-4">
                                    <button onClick={() => handleOpen(content)}>
                                        <div className="flex relative w-50 h-60">
                                            <img
                                                alt={content.imgalt}
                                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                                                src={content.image}
                                            />
                                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 rounded-md bg-gray-900 opacity-0 hover:opacity-100">
                                                
                                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                                    {content.title}
                                                </h1>
                                                <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">
                                                    {content.subtitle}
                                                </h2>
                                                {/* <p className="leading-relaxed">
                                                    {content.content}
                                                </p> */}
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