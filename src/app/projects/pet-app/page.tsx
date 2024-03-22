import {Section, Footer, Navbar, HeadLine, ImageGallery} from "ui";

export default function Home() {
  const imagesURLS = [{text:"1", url:"../../../../public/svg/mailIcon.svg"}, {text:"2", url:"../../../../public/svg/githubIcon.svg"}, {text:"3", url:"../../../../public/svg/likedinIcon.svg"}]

  return (
    <>
      <Navbar />

      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth h-screen flex	">
          <div className="w-full flex flex-row justify-center p-24  max-h-fit min-h-10 ">
            <div className="w-full max-w-desktop flex grow gap-4">
              <div className="flex  flex-col basis-1/2">
                <HeadLine text={"Pet App"} />
                <div className="text-md mt-4">
                  React | MongoDB | Vercel | ChakraUI | Node.js
                </div>
                <div className="text-white mt-8 flex flex-col gap-6 ">
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
              <div className="basis-1/2 flex flex-col gap-4 mt-8 justify-items-start">
                <ImageGallery imagesURLS={imagesURLS}/>

              </div>
            </div>
          </div>
        </div>
        <Footer />

      </main>
    </>
  );
}
