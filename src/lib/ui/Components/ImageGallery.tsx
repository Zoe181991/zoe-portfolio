"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
                <div className="absolute bottom-0 left-0 bg-base-2 w-full h-16  bg-opacity-80 text-base-1 py-2 px-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white pb-2"> {image.text}</span>
                    <label
                      htmlFor="my_modal_6"
                      className="btn bg-opacity-0   hover:bg-white hover:bg-opacity-50 border-none "
                    >
                      <Image
                        src={`${process.env.BASE_PATH}svg/arrowsMaximize.svg`}
                        alt={"maximize"}
                        width={24}
                        height={24}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl">
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
                    <div className=" mt-0 modal-action flex justify-between items-center mb-8">
                      <h3 className="font-bold text-lg">{image.text}</h3>
                      <label
                        htmlFor="my_modal_6"
                        className="btn rounded-full hover:bg-opacity-30 hover:bg-white"
                      >
                        ✕
                      </label>
                    </div>
                    <div className="carousel-item">
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
      </div>

      <dialog id="open_gallery" className="modal">
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
