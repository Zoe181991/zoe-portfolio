'use client'
import React from 'react';
import Image from "next/image";


interface ImageGalleryProps {
    imagesURLS:{text: string, src: string } [];
}
export function ImageGallery({imagesURLS}: ImageGalleryProps) {

    const [activeIndex, setActiveIndex] = React.useState(0);
// const [url, setUrl] = React.useState(imagesURLS[activeIndex].url)
    const nextPhoto = () => {
        if(activeIndex === imagesURLS.length-1) {
            setActiveIndex(0)

        }else{
            setActiveIndex((prev) => (prev + 1) );

        }
    }
    const previousPhoto = () => {
        if(activeIndex === 0) {
            setActiveIndex(imagesURLS.length-1)

        } else{
            setActiveIndex((prev) => (prev - 1) );

        }
    }

    return (
        <div>
            <div id="gallery" className="relative w-full h-full " >
                <div className="overflow-hidden rounded-lg w-full h-56  md:h-96 ">
                    { imagesURLS.map((image, index) => {
                        return (
                            <div key={index} className={(index===activeIndex)? "absolute top-0 left-0 w-full h-full opacity-100 duration-700 ease-in-out" : "hidden"}>

                                <div className="absolute">
                                <Image  src={image.src} alt={image.text} width={680} height={480} sizes={"(max-width: 200px) 100vw, (max-width: 1200px) 50vw, 33vw"}/>
                                <div className="relative px-2 py-4  z-10 bg-white bg-opacity-30 h-16 w-full max-w-screen-xl text-base-2 text-lg md:text-xl">{image.text}</div>
                                </div>
                            </div>
                        )
                    })}

                </div>


                <button onClick={previousPhoto} type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-base-2 dark:group-hover:bg-base-2 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
                </button>
                <button type="button"
                        className=" absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={nextPhoto}>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-base-2 dark:group-hover:bg-base-2 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
                </button>
            </div>


        </div>
    );
}

