import {Section, Footer, Navbar, HeadLine, ImageGallery} from "ui";
import {ImageGalleryPetAppContent} from "ui";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <div className="w-full flex flex-col justify-center pt-8 pb-24 px-12 md:px-24  max-h-fit min-h-10 ">
            <HeadLine text={"Mukdam Inspection System"} />
            <div className="text-sm lg:text-md mt-4">
              React | MongoDB | Vercel | ChakraUI | Node.js
            </div>
            <div className="w-full flex flex-col mt-8 lg:flex-row grow shrink gap-8  sm:gap-16 md:gap-12 grow shrink  lg:gap-12">
              <div className=" lg:w-1/2 w-full h-full">
                <ImageGallery imagesURLS={ImageGalleryPetAppContent}/>
              </div>
              <div className="h-4"></div>
              <div className="flex flex-col h-full lg:w-1/2 text-white gap-6 lg:mt-0 ">
                  <p>
                    Get a pet today! Pawsitive adoptions allow you to get the pet you have always wished for.
                    Search for your pet and save it to your wishlist. You can register and adopt or foster it for a short period of time.                   </p>
                  <p>
                    I had a great time putting this app together, I learned a lot about the meaning of being a full-stack developer and crafting the entire app end-to-end.                  </p>

                  <p>This was the final project of my studies at the ITC full-stack development bootcamp. The project had three main parts:
                    Building the front-end using ChakraUI and additional code - guest preview, user preview, and manager preview.
                    Building the backend database using MongoDB.
                    Deploying the app using Vercel.
                  </p>

              </div>
            </div>
          </div>
        </div>
      </main>
        <Footer />
    </>
  );
}

