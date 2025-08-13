const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute  pt-[80px] md:pt-[100px] lg:pt-[180px] xl:pt-[230px] 2xl:pt-[400px] w-screen aspect-video max-h-[1300px] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold">{title}</h1>
      
      <p className=" text-[9px] w-80 max-sm:w-52 sm:text-[12px] md:text-sm lg:text-[13px] xl:text-[15px] line-clamp-3 sm:line-clamp-none">
        {overview}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button className="bg-white text-black border-1 p-1 px-3 sm:p-2 sm:px-4 text-xs sm:text-sm font-bold hover:scale-105 duration-200 rounded-lg hover:opacity-70">
          ▶ Play
        </button>
        <button className="bg-gray-900 text-white border-1 p-1 px-3 sm:p-2 sm:px-4 text-xs sm:text-sm font-bold hover:scale-105 duration-200 ease-in rounded-lg bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

