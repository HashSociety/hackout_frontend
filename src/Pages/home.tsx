function Home() {
  return (
    <div className="flex pt-14 ">
      <div className="flex w-full h-32 justify-center items-center  ">
        <div
          className="button w-40 h-16 bg-primary  cursor-pointer select-none
        active:translate-y-2  active:[box-shadow:0_0px_0_0_#202124,0_0px_0_0_#202124]
        active:border-b-[0px]
        transition-all duration-150 [box-shadow:0_10px_0_0_#202124,0_15px_0_0_#202124]
        rounded-full  border-[1px] border-gray-400
        
        "
        >
          <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
            Create Room
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
