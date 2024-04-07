"use client";

export function MobileNav() {
  return (
    <div className="flex  flex-col  items-center text-center w-full border-b-2 border-white ">
      <div className="py-2 w-full text-[#f98d55] hover:bg-[#f98d55]  hover:text-base-1 font-semibold hover:cursor-pointer hover:scale-125  transition ease-in-out duration-200">
        <a href="/#aboutMe">about</a>
      </div>
      <div className="py-2 w-full text-[#c974a3] hover:bg-[#c974a3]  hover:text-base-1 font-semibold text-base-4 hover:scale-125 hover:cursor-pointer  transition ease-in-out duration-300">
        <a
          href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/"
          target="_blank"
        >
          linkedin
        </a>
      </div>
      <div className="py-2 w-full font-semibold text-base-2 hover:bg-base-2  hover:text-base-1 hover:cursor-pointer hover:scale-125  transition ease-in-out duration-200">
        <a href="https://github.com/Zoe181991" target="_blank">
          github
        </a>
      </div>
      <div className="py-2 w-full text-base-4 hover:bg-base-4  hover:text-base-1 font-semibold hover:cursor-pointer hover:scale-125  transition ease-in-out duration-200">
        <a href="mailto:zoebarkan@gmail.com" target="_blank">
          email
        </a>
      </div>
    </div>
  );
}
