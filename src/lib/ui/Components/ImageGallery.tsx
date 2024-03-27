'use client'
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import arrowsMaximize from "../../../../public/svg/arrowsMaximize.svg";

interface ImageGalleryProps {
    imagesURLS:{text: string, src: string } [];
}
export function ImageGallery({imagesURLS}: ImageGalleryProps) {
    const router = useRouter()

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [activeIndexModal, setActiveIndexModal] = React.useState(activeIndex);

    const handleNext = (index: number) => {
        console.log("activeIndex:", activeIndex, "index:", index)
        if(activeIndex === imagesURLS.length-1) {
            setActiveIndex(0)
            router.push(`/projects/mukdam-crm/#slide${0}`)

        }else{
            setActiveIndex((prev) => (prev + 1) );
            router.push(`/projects/mukdam-crm/#slide${index+1}`)

        }
    }

    // const handleNextModal = (index: number) => {
    //     console.log("activeIndex:", activeIndex, "index:", index)
    //     if(activeIndex === imagesURLS.length-1) {
    //         setActiveIndex(0)
    //         router.push(`/projects/mukdam-crm/#slide_modal_${0}`)
    //
    //     }else{
    //         setActiveIndex((prev) => (prev + 1) );
    //         router.push(`/projects/mukdam-crm/#slide_modal_${index+1}`)
    //
    //     }
    // }

    const handlePrevious = (index: number) => {
        console.log("activeIndex:", activeIndex, "index:", index)
        if(activeIndex === 0) {
            setActiveIndex(imagesURLS.length-1)
            const newIndex = imagesURLS.length-1
            router.push(`/projects/mukdam-crm/#slide${newIndex}`)

        } else{
            const newIndex = index-1
            setActiveIndex((prev) => (prev - 1) );
            router.push(`/projects/mukdam-crm/#slide${newIndex}`)

        }
    }
    // const handlePreviousModal = (index: number) => {
    //     console.log("activeIndex:", activeIndex, "index:", index)
    //     if(activeIndex === 0) {
    //         setActiveIndex(imagesURLS.length-1)
    //         const newIndex = imagesURLS.length-1
    //         router.push(`/projects/mukdam-crm/#slide_modal_${newIndex}`)
    //
    //     } else{
    //         const newIndex = index-1
    //         setActiveIndex((prev) => (prev - 1) );
    //         router.push(`/projects/mukdam-crm/#slide_modal_${newIndex}`)
    //
    //     }
    // }

    return (
        <>
        <div className="carousel w-full">
                { imagesURLS.map((image, index) => {
                    return (
                        <>
                        <div id={`slide${index}`} className="carousel-item relative w-full">
                            <img src={image.src} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a onClick={()=>handlePrevious(index)} className="btn btn-circle">❮</a>
                                <a onClick={()=>handleNext(index)} className="btn btn-circle">❯</a>
                            </div>
                            <div className='absolute bottom-0 left-0 bg-base-2 w-full h-16  bg-opacity-60 text-base-1 p-4'>

                               <div className="flex justify-between items-center">
                                  <span className="opacity-60"> {image.text}</span>
                                   <button className="btn-xs" onClick={()=>document.getElementById('my_modal_3').showModal()}><Image src={arrowsMaximize} alt={"maximize"} width={24} height={24} /></button>

                               </div>

                            </div>
                        </div>
                        </>
                    )
                })}
        </div>



            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl h-screen">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-lg">✕</button>
                    </form>
                    
                            { imagesURLS.map((image, index) => {
                                    return (
                                        <>
                                        <div key={index} className={(index===activeIndex)? " opacity-100 duration-700 ease-in-out " : "hidden"}>
                                            <h3 className="font-bold text-lg">{image.text}</h3>
                                            <Image  src={image.src} alt={image.text} layout="responsive" width={680} height={480} />
                                        </div>
                                        </>
                                    )
                                })}

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


    </>



    );
}


{/*    <div id="slide1" className="carousel-item relative w-full">*/}

{/*    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />*/}
{/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
{/*            <a href="#slide4" className="btn btn-circle">❮</a>*/}
{/*            <a href="#slide2" className="btn btn-circle">❯</a>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*    <div id="slide2" className="carousel-item relative w-full">*/}
{/*        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />*/}
{/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
{/*            <a href="#slide1" className="btn btn-circle">❮</a>*/}
{/*            <a href="#slide3" className="btn btn-circle">❯</a>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*    <div id="slide3" className="carousel-item relative w-full">*/}
{/*        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />*/}
{/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
{/*            <a href="#slide2" className="btn btn-circle">❮</a>*/}
{/*            <a href="#slide4" className="btn btn-circle">❯</a>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*    <div id="slide4" className="carousel-item relative w-full">*/}
{/*        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />*/}
{/*        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
{/*            <a href="#slide3" className="btn btn-circle">❮</a>*/}
{/*            <a href="#slide1" className="btn btn-circle">❯</a>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}


{/*     <div id="gallery" className="relative max-h-fit  " >*/}
{/*        <div className="overflow-hidden rounded-lg w-screen h-72  md:h-96 justify-center ">*/}
{/*        { imagesURLS.map((image, index) => {*/}
{/*                return (*/}
{/*                    <div key={index} className={(index===activeIndex)? "absolute top-0 left-0 w-full h-full opacity-100 duration-700 ease-in-out " : "hidden"}>*/}

{/*                        <Image  src={image.src} alt={image.text} layout="responsive" width={680} height={480} />*/}
{/*                        <div className="relative px-2 py-4  z-10 bg-white bg-opacity-30 h-16 w-full max-w-screen-xl text-base-2 text-lg md:text-xl">{image.text}</div>*/}
{/*                    </div>*/}
{/*                )*/}
{/*            })}*/}

{/*        </div>*/}

{/*        <button onClick={previousPhoto} type="button"*/}
{/*                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
{/*                >*/}
{/*<span*/}
{/*    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-base-2 dark:group-hover:bg-base-2 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
{/*    <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true"*/}
{/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">*/}
{/*        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
{/*              d="M5 1 1 5l4 4"/>*/}
{/*    </svg>*/}
{/*    <span className="sr-only">Previous</span>*/}
{/*</span>*/}
{/*        </button>*/}
{/*        <button type="button"*/}
{/*                className=" absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
{/*                onClick={nextPhoto}>*/}
{/*<span*/}
{/*    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-base-2 dark:group-hover:bg-base-2 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
{/*    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true"*/}
{/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">*/}
{/*        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
{/*              d="m1 9 4-4-4-4"/>*/}
{/*    </svg>*/}
{/*    <span className="sr-only">Next</span>*/}
{/*</span>*/}
{/*        </button>*/}
{/*    </div>*/}

