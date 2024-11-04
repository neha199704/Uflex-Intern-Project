const TextArea = ({ sportName }) => {
  return (
    <div className="absolute w-[492.92px] h-[500px] top-44 left-[34px] p-4">
      <h1 className="w-[427px] h-[155px] mb-12 font-inter text-[128px] font-extrabold leading-[154.91px]  text-white">
        Sports
      </h1>
      <h4 className="w-[134px] h-[48px] mb-12  font-inter text-[40px] font-extrabold leading-[48.41px]  text-white">
        {sportName}
      </h4>
      <p className="w-[492.92px] h-[261px] font-inter text-[24px] font-extrabold leading-[29.05px]  text-white">
        Welcome to Athlete’s Academy - your Gateway to sporting Excellence! At
        Athlete’s Academy, we are dedicated to connecting aspiring athletes with
        experienced coaches and mentors through our cutting-edge chat platform.
        Whether you’re passionate about tennis, football, cricket, or any other
        sports, we’ve got you covered!
      </p>
    </div>
  );
};
export default TextArea;
