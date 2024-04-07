import Image from "next/image";

export function Socialbar() {
  return (
    <ul className="hidden md:flex md:flex-row md:gap-6">
      <li className="font-semibold hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="/#aboutMe">about</a>
      </li>
      <li className="  hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a
          href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/"
          target="_blank"
        >
          <Image
            src={`${process.env.BASE_PATH}/svg/linkedinIcon.svg`}
            alt={""}
            width="24"
            height="24"
            className="fill-base-2"
          />
        </a>
      </li>

      <li className="hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="https://github.com/Zoe181991" target="_blank">
          <Image
            src={`${process.env.BASE_PATH}/svg/githubIconColored.svg`}
            alt={""}
            width="24"
            height="24"
          />
        </a>
      </li>

      <li className="hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="mailto:zoebarkan@gmail.com" target="_blank">
          <Image
            src={`${process.env.BASE_PATH}/svg/mailIcon.svg`}
            alt={""}
            width={"24"}
            height="24"
          />
        </a>
      </li>
    </ul>
  );
}
