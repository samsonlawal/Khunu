import atom from "../img/atom.png";
import agric from "../img/agric.png";
import dna from "../img/dna.png";
import chem from "../img/chem.png";
import solar from "../img/solar.png";
import physics from "../img/physics.png";
import lady from "../img/girlAcrobat.png";

export default function () {
  return (
    <div className="w-full px-4 lg:px-10 xl:px-20 py-10 flex items-center justify-center lg:flex-row bg-red-300">
      <div className="w-full md:px-4 flex flex-col justify-center items-center lg:w-1/2">
        <div className="border-l-4 border-lipstick px-2 my-16 xl:w-11/12">
          <p className="text-2xl xl:text-3xl font-bold">
            Discover Journals, Research Papers And Publication Across Different
            Fields
          </p>
        </div>
        {/* Topics */}
        <div className="w-full lg:w-11/12 flex flex-row flex-wrap justify-center items-center mb-16">
          <div className="w-1/2 mb-16 md:w-1/3 flex flex-col justify-center items-center text-center">
            <img src={atom} alt="" className="pb-5 w-10" />
            <p className="text-sm lg:text-base font-semibold">
              Artificial Intelligence
            </p>
          </div>
          <div className="w-1/2 mb-16 md:w-1/3 flex flex-col justify-center items-center">
            <img src={dna} alt="" className="pb-5 w-10" />
            <p className="text-sm lg:text-base font-semibold">
              Medical Science
            </p>
          </div>
          <div className="w-1/2 mb-16 md:w-1/3 flex flex-col justify-center items-center">
            <img src={chem} alt="" className="pb-5 w-10" />
            <p className="text-sm lg:text-base font-semibold">Chemistry</p>
          </div>

          <div className="w-1/2 mb-16 md:w-1/3 flex flex-col justify-center items-center">
            <img src={solar} alt="" className="pb-5 w-10" />
            <p className="text-sm lg:text-base font-semibold">Engineering</p>
          </div>
          <div className="w-1/2 mb-16 md:w-1/3 flex flex-col justify-center items-center">
            <img src={agric} alt="" className="pb-4 w-8" />
            <p className="text-sm lg:text-base font-semibold">Agriculture</p>
          </div>
          <div className="w-1/2 mb-16 md:w-1/3 flex flex-col justify-center items-center">
            <img src={physics} alt="" className="pb-5 w-10" />
            <p className="text-sm lg:text-base font-semibold">Physics</p>
          </div>
        </div>
      </div>
      {/* Lady Acrobat */}
      <div className="hidden lg:w-1/2 lg:flex justify-center">
        <img src={lady} alt="" className="w-9/12" />
      </div>
    </div>
  );
}
