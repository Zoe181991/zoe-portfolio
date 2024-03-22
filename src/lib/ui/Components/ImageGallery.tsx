'use client'
import React from 'react';
import Image from "next/image";
interface ImageGalleryProps {
    imagesURLS: { text: string, url: string }[];
}
export function ImageGallery({imagesURLS}:ImageGalleryProps) {

    const [activeIndex, setActiveIndex] = React.useState(0);
// const [url, setUrl] = React.useState(imagesURLS[activeIndex].url)
    const nextPhoto = () => {
        console.log('next', activeIndex)
        if(activeIndex === imagesURLS.length-1) {
            setActiveIndex(0)

        }else{
            setActiveIndex((prev) => (prev + 1) );

        }
    }
    const previousPhoto = () => {
        console.log('pre', activeIndex)
        if(activeIndex === 0) {
            setActiveIndex(imagesURLS.length-1)

        } else{
            setActiveIndex((prev) => (prev - 1) );

        }
    }

    return (
        <div>


            <div id="gallery" className="relative w-full" data-carousel="slide">
                <div className=" h-56 overflow-hidden rounded-lg md:h-96">

                    { imagesURLS.map((image, index) => {
                        return (
                            <div key={index} className={(index===activeIndex)? "absolute top-0 left-0 w-full h-full opacity-100 duration-700 ease-in-out" : "hidden"}>
                                <div className="flex flex-col grow  w-full">
                                    <div className="flex basis-1/2">
                                    <Image width={400} height={300} src={image.url} alt={image.text} className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="flex basis-1/2">
                                <div className=" bg-white bg-opacity-30 h-full w-full text-base-2 text-xl">{image.text}</div>
                                </div>
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

