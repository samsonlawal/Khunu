import man from "../img/manInterview.png";
import spotify from "../img/spotify.png";
import ipod from "../img/ipod.png";
import gpod from "../img/gpod.png";

export default function CTA() {
  return (
    <div className="w-full my-10 px-8 py-16 lg:px-28 flex justify-start items-center lg:h-screen bg-blue-100">
      <div className="p-10 w-128 bg-white">
        <h1 className="text-3xl font-bold">Kuhnu Podcasts</h1>
        <p className="py-4 text-graylip">
          We invite industry professionals and researchers across diverse fields
          of study to discuss about their work.
        </p>
        <button className="bg-lipstick py-2 px-5 rounded-3xl text-white">
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
