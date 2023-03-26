import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Andrés",
      "Guy-who-loves-to-workout.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D4D03AQF2aLJ-SEcs2A/profile-displayphoto-shrink_100_100/0/1675947027228?e=1684972800&v=beta&t=6Fn5FdJ-Nmb-H9ey9Hc1PjBjAd407XCf7i22LwZ3t-U"
        alt="Andrés Profile Picture"
        width={100}
        height={100}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Fullstack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#6b0a7f" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
