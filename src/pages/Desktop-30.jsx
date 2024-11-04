import Header from "../components/Header";
import istockPhoto from "../assets/istockPhoto.svg";
import tennisPlayer from "../assets/tennisPlayer.svg";
import Discount from "../components/Discount";
import ellipse from "../assets/ellipse.svg";
import ArrowButtons from "../components/ArrowButtons";
import forwardArrow from "../assets/forwardArrow.svg";
import TextArea from "../components/TextArea";

const Desktop30 = () => {
  const sport = "Tennis";
  return (
    <div
      className="min-h-screen

  bg-[linear-gradient(269.02deg,rgba(233,19,83,0.83)_30.84%,rgba(233,20,84,0.83)_50.71%,rgba(248,64,119,0.83)_78.74%)]"
    >
      <Header />
      <TextArea sportName={sport} />
      <div className="relative  left-[1247px] w-[432px] h-[368px]">
        <div className="flex ">
          <Discount textColor="text-[#D90948]" />
          <img src={istockPhoto} alt="" />
        </div>
        <div className="w-[455.68px] h-[695.8px] relative bottom-[15rem] right-[33rem]  ">
          <img
            className="absolute bottom-0 left-16 z-0 "
            src={ellipse}
            alt="Ellipse"
          />
          <img
            className="relative z-10 w-full h-full"
            src={tennisPlayer}
            alt="Tennis Player"
          />
        </div>
      </div>

      <ArrowButtons
        bgButton="bg-[#D80847] "
        forwardArrowSrc={forwardArrow}
        top="top-[189px]"
        linkBackward="/desktop20"
        linkForward="/desktop19"
      />
    </div>
  );
};
export default Desktop30;
