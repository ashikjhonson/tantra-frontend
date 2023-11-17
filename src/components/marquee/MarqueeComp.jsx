import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
  return (
    <div>
      <Marquee
        loop={0}
        speed={100}
        autoFill
        gradient
        gradientColor="rgba(25, 255, 25, 0.5)"
        gradientWidth={800}
      >
        <p className="border-y py-2 text-2xl  bg-black">| Tantra'23 |</p>
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
