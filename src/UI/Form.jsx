export default function Form() {
  return (
    <div className="w-full px-4 py-20 lg:py-20 flex flex-col justify-center items-center bg-palelip">
      <div className="px-4 py-14 lg:p-20 flex flex-col justify-center items-center bg-white border-2 rounded-xl border-lightlipstick">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-lipstick font-mont">
            Khunu is Launching Soon
          </h1>
          <p className="py-5 text-graylip lg:text-lg lg:w-140 font-open">
            Be among the first to get access to this product when it launches.
            Join our waitlist below.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center items-center w-full font-mont">
          <div className="flex flex-col justify-center items-center w-full md:flex-row">
            <input
              type="text"
              placeholder="First Name"
              className="px-5 py-3 w-full md:w-72 md:mx-1.5 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="px-5 py-3 w-full md:w-72 md:mx-1.5 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
            />
          </div>

          <input
            type="text"
            placeholder="Country"
            className="px-5 py-3 w-full md:w-140 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-5 py-3 w-full md:w-140 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
          />

          <button className="bg-lipstick py-3 px-10 rounded-xl text-white font-medium hover:bg-red-700">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
