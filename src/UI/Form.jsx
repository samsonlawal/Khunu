import { useState } from "react";

export default function Form() {
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);

  function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value;

    if (firstName === "" || lastName === "" || country === "" || email === "") {
      // alert("Please fill in all fields before submitting.");
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 5000);
    } else {
      setValid(true);
      setTimeout(() => {
        setValid(false);
      }, 5000);

      // alert("Form submitted successfully!");
      // Add any additional logic to handle form submission
    }
  }

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
          {invalid ? (
            <p className="text-red-500 pb-4 font-semibold">
              *Please fill in all fields before submitting.
            </p>
          ) : (
            ""
          )}

          {valid ? (
            <p className="text-green-500 pb-4 font-semibold">
              Form submitted successfully!
            </p>
          ) : (
            ""
          )}

          <div className="flex flex-col justify-center items-center w-full md:flex-row">
            <input
              type="text"
              placeholder="First Name"
              className="px-5 py-3 w-full md:w-72 md:mx-1.5 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
              id="firstName"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              className="px-5 py-3 w-full md:w-72 md:mx-1.5 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
              id="lastName"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Country"
            className="px-5 py-3 w-full md:w-140 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
            id="country"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-5 py-3 w-full md:w-140 rounded-xl bg-pink-100 border-2 border-lightlipstick focus:outline-none mb-4"
            id="email"
            required
          />

          <button
            onClick={validateForm}
            className="bg-lipstick py-3 px-10 rounded-xl text-white font-medium hover:bg-red-700"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
