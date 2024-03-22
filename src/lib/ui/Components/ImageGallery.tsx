'use client'
import React from 'react';
import Image from "next/image";
import flowbite from "flowbite";
interface ImageGalleryProps {
    imagesURLS: { text: string, url: string }[];
}
export function ImageGallery({imagesURLS}:ImageGalleryProps) {

    const [activeIndex, setActiveIndex] = React.useState(0);
const [url, setUrl] = React.useState(imagesURLS[activeIndex].url)
    const nextPhoto = () => {
        console.log('next', activeIndex)
        if(activeIndex === imagesURLS.length-1) {
            setActiveIndex(0)
            return;
        }
        setActiveIndex((prev) => (prev + 1) );
    }
    const previousIndex = () => {
        console.log('pre', activeIndex)
        if(activeIndex === 0) {
            setActiveIndex(imagesURLS.length-1)
            return;
        }
        setActiveIndex((prev) => (prev - 1) );
    }

    return (
        <div>



        </div>
    );
}

