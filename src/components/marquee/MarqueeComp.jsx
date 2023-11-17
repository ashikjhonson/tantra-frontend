import Marquee from "react-fast-marquee";

const MarqueeComp = ({
  word = "| TANTRA'23 |",
  mdir = "left",
  rot = "rotate-0",
}) => {
  return (
    <div className={rot + " w-full"}>
      <Marquee
        loop={0}
        speed={50}
        autoFill
        direction={mdir}
        gradient
        gradientColor="rgba(255, 255, 255, 0.3)"
        gradientWidth={800}
      >
        <p className="py-4 text-2xl bg-black">{word}</p>
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
