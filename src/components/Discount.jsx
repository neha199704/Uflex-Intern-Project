import premiumPhoto from "../assets/premiumPhoto.svg";
const Discount = ({ textcolor }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] gap-2 p-3 flex w-56 h-32">
      <img src={premiumPhoto} alt="" />
      <p
        className={`font-inter text-[20px] font-extrabold leading-[24.2px] text-left ${textcolor}`}
      >
        20% discount on team orders
      </p>
    </div>
  );
};
export default Discount;
