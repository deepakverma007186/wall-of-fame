import { imgSvg } from "../helper/imgSvg";
// import "../helper/particlePhysics";

const LogoParticle = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* <canvas id="canvas" className="w-full h-full"></canvas> */}
        <img src={imgSvg} alt="hero-img" id="image" className="" />
      </div>
    </>
  );
};

export default LogoParticle;
