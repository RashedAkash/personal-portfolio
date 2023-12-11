import HeroContent from "./HeroContent";


const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180  top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className=" absolute top-0 left-0 z-20 w-full h-full">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;