import ArrowButtons from "../components/ArrowButtons";
import Discount from "../components/Discount";
import Header from "../components/Header";
import forwardArrowBlue from "../assets/forwardArrowBlue.svg";
import football from "../assets/football.svg";

import ellipseBlue from "../assets/ellipseBlue.svg";
import TextArea from "../components/TextArea";

const Desktop19 = () => {
  const sport = "Football";
  return (
    <div
      className=" min-h-screen  
 bg-[linear-gradient(269.02deg,rgba(21,25,121,0.83)_55.53%,rgba(39,46,223,0.83)_78.74%)]"
    >
      <Header />
      <TextArea sportName={sport} />
      <div className="relative top-16  left-[1393px] w-[286.15px] h-[156px]">
        <Discount textcolor="text-[#141CDD]" />
      </div>

      <ArrowButtons
        bgButton="bg-[#141CDD]"
        forwardArrowSrc={forwardArrowBlue}
        top="top-[400px]"
        linkBackward="/desktop30"
        linkForward="/desktop20"
      />
      <div className="w-[829.82px] h-[553px]">
        <img
          className="absolute bottom-0 left-[650px] z-0"
          src={ellipseBlue}
          alt="EllipseBlue"
        />
        <img
          className="relative z-10 bottom-48  left-[600px]"
          src={football}
          alt="football"
        />
      </div>
    </div>
  );
};
export default Desktop19;
