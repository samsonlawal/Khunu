import man from "../img/manInterview.png";
import spotify from "../img/spotify.png";
import ipod from "../img/ipod.png";
import gpod from "../img/gpod.png";

export default function CTA() {
  return (
    <div
      className="w-full my-10 px-4 py-16 lg:px-28 flex justify-start items-center h-auto lg:h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${man})` }}
    >
      <div className="py-10 px-5 lg:px-10 w-128 bg-white">
        <h1 className="text-3xl font-bold font-mont">Khunu Podcasts</h1>
        <p className="py-4 text-graylip font-open">
          We invite industry professionals and researchers across diverse fields
          of study to discuss about their work.
        </p>
        <button className="bg-lipstick py-3 px-3 my-1 text-sm md:px-5 rounded-3xl text-white font-open">
          Coming soon on the following platforms
        </button>
        <div className="w-full flex flex-row justify-start items-center py-4">
          <img src={ipod} alt="" className="w-7 mr-2 hover:cursor-pointer" />
          <img src={spotify} alt="" className="w-7 mr-2 hover:cursor-pointer" />
          <img src={gpod} alt="" className="w-7 mr-2 hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
