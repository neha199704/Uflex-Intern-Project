import ArrowButtons from "../components/ArrowButtons";
import Discount from "../components/Discount";
import Header from "../components/Header";
import forwardArrowOrange from "../assets/forwardArrowOrange.svg";
import playerWithBasketball from "../assets/playerWithBasketball.svg";
import ellipseOrange from "../assets/ellipseOrange.svg";
import TextArea from "../components/TextArea";

const Desktop20 = () => {
  const sport = "BasketBall";
  return (
    <div
      className="min-h-screen "
      style={{
        background:
          "linear-gradient(269.02deg, rgba(242, 49, 6, 0.83) 14.62%, rgba(224, 70, 10, 0.83) 42.81%, rgba(226, 68, 10, 0.83) 45.66%, rgba(249, 82, 10, 0.83) 78.74%)",
      }}
    >
      <Header />
      <TextArea sportName={sport} />
      <div className="relative top-16  left-[1393px] w-[286.15px] h-[156px]">
        <Discount textcolor="text-[#EC2C02]" />
      </div>

      <ArrowButtons
        bgButton="bg-[#F9520A]"
        forwardArrowSrc={forwardArrowOrange}
        top="top-[400px]"
        linkBackward="/desktop19"
        linkForward="/desktop30"
      />
      <div className="relative w-[1145.25px] h-[554px]">
        <img
          className="absolute bottom-0 left-[650px] z-0"
          src={ellipseOrange}
          alt="ellipseOrange"
        />
        <img
          className="absolute z-10 bottom-0 w-[1145.25px]   left-[146.92px]"
          src={playerWithBasketball}
          alt="playerWithBasketball"
        />
      </div>
    </div>
  );
};
export default Desktop20;
