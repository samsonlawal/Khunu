import lady from "../img/headerLady.png";

export default function Header() {
  return (
    <div className="h-fit md:h-82 py-10 lg:p-10 xl:px-20 xl:py-0 w-full flex flex-col lg:flex-row justify-center items-center px-5 mb-20 lg:mb-0 bg-violet-600">
      {/* Image */}
      <div className="pb-10 md:pb-0 w-full flex justify-center items-center">
        <img src={lady} alt="" className="md:w-7/12 lg:w-9/12 w-96" />
      </div>

      {/* Text */}
      <div className="w-11/12 md:w-10/12 lg:px-0 lg:w-full flex items-center justify-center lg:items-start lg:justify-start flex-col">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:text-start text-center">
          <h1 className=" text-2xl lg:text-4xl font-bold text-lipstick">
            AI Digital Repository Helping People Explore, Discover and Share
            Relevant Research papers
          </h1>

          <p className="py-5 md:text-lg text-graylip">
            Get access to over 10,000 journal publications, research papers from
            verified publishers across the world.
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-fit lg:w-98 flex flex-col md:flex-row md:justify-between px-2 items-center py-1 md:bg-lightlipstick md:border-2 border-lipstick rounded-lg">
          <input
            type="text"
            placeholder="Enter Keyword"
            className="w-96 px-2 rounded-lg mb-1 md:mb-0 md:px-0.5 py-3 md:w-64 md:bg-transparent focus:outline-none bg-lightlipstick border-2 border-lipstick md:border-0 md:bg-none"
          />
          <button className="w-fit m-1 px-2 py-2 text-sm font-semibold rounded-lg bg-lipstick text-white ">
            Search Publications
          </button>
        </div>
      </div>
    </div>
  );
}
