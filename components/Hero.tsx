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
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#6b0a7f" />
      </h1>
    </div>
  );
}

export default Hero;
