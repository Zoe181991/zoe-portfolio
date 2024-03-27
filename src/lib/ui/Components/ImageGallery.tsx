"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import arrowsMaximize from "../../../../public/svg/arrowsMaximize.svg";

interface ImageGalleryProps {
  imagesURLS: { text: string; src: string }[];
  projectName: string;
}
export function ImageGallery({ imagesURLS, projectName }: ImageGalleryProps) {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeIndexModal, setActiveIndexModal] = React.useState(activeIndex);

  const handleNext = (index: number) => {
    console.log("activeIndex:", activeIndex, "index:", index);
    if (activeIndex === imagesURLS.length - 1) {
      setActiveIndex(0);
      router.push(`/projects/${projectName}/#slide${0}`);
    } else {
      setActiveIndex((prev) => prev + 1);
      router.push(`/projects/${projectName}/#slide${index + 1}`);
    }
  };

  const handlePrevious = (index: number) => {
    console.log("activeIndex:", activeIndex, "index:", index);
    if (activeIndex === 0) {
      setActiveIndex(imagesURLS.length - 1);
      const newIndex = imagesURLS.length - 1;
      router.push(`/projects/${projectName}/#slide${newIndex}`);
    } else {
      const newIndex = index - 1;
      setActiveIndex((prev) => prev - 1);
      router.push(`/projects/${projectName}/#slide${newIndex}`);
    }
  };

  const handleNextModal = () => {
    console.log("activeIndex:", activeIndex);
    if (activeIndexModal === imagesURLS.length - 1) {
      setActiveIndexModal(0);
    } else {
      setActiveIndexModal((prev) => prev + 1);
    }
  };
  const handlePreviousModal = () => {
    console.log("activeIndex:", activeIndex);
    if (activeIndexModal === 0) {
      setActiveIndexModal(imagesURLS.length - 1);
    } else {
      setActiveIndexModal((prev) => prev - 1);
    }
  };

  return (
    <>
      <div id="carousel" className="carousel w-full">
        {imagesURLS.map((image, index) => {
          return (
            <>
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <img src={image.src} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    onClick={() => handlePrevious(index)}
                    className="btn btn-circle opacity-60"
                  >
                    ❮
                  </a>
                  <a
                    onClick={() => handleNext(index)}
                    className="btn btn-circle opacity-60"
                  >
                    ❯
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 bg-base-2 w-full h-16  bg-opacity-80 text-base-1 p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white"> {image.text}</span>
                    <button
                      className="btn-xs"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <Image
                        src={arrowsMaximize}
                        alt={"maximize"}
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl h-screen">
          <form method="dialog">
            <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-lg">
              ✕
            </button>
          </form>
          <div className="carousel w-full">
            {imagesURLS.map((image, indexModal) => {
              return (
                <>
                  <div
                    key={indexModal}
                    className={
                      indexModal === activeIndexModal
                        ? " w-full opacity-100 duration-700 ease-in-out "
                        : "hidden"
                    }
                  >
                    <h3 className="font-bold text-lg mb-2">{image.text}</h3>
                    <div className="carousel-item relative">
                      <Image
                        src={image.src}
                        alt={image.text}
                        layout="responsive"
                        width={680}
                        height={480}
                      />
                      <div className="absolute flex opacity-60 justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                          onClick={handlePreviousModal}
                          className="btn btn-circle"
                        >
                          ❮
                        </a>
                        <a onClick={handleNextModal} className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
