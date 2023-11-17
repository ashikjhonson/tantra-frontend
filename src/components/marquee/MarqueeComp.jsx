import Marquee from "react-fast-marquee";

const MarqueeComp = ({ word = "| TANTRA'23 |" }) => {
  return (
    <Marquee
      loop={0}
      speed={100}
      autoFill
      // gradient
      // gradientColor="rgba(25, 255, 25, 0.5)"
      // gradientWidth={800}
    >
      <p className="py-4 text-2xl  bg-black">{word}</p>
    </Marquee>
  );
};

export default MarqueeComp;
