export default function Footer() {
  return (
    <div className="px-4 pb-8 text-center md:text-left md:px-8 lg:px-28 lg:flex lg:flex-row lg:justify-start lg:items-end">
      {/* Links */}
      <div className="py-8 lg:py-0 lg:mr-28 flex flex-col justify-center items-center md:flex-row md:justify-start md:items-end lg:flex lg:flex-row lg:justify-center lg:items-end">
        <div className="py-2 lg:py-0 mr-5 font-mont">
          <p className="text-lipstick text-lg font-bold pb-4">Contact</p>
          <p>debra.holt@example.com</p>
        </div>

        {/* socials */}
        <div className=" md:pb-2 lg:pb-0 md:pl-10">
          <i class="fa-brands fa-facebook-f text-lg text-lipstick mr-8 md:mr-6"></i>
          <i class="fa-brands fa-twitter text-lg text-lipstick mr-8 md:mr-6"></i>
          <i class="fa-brands fa-instagram text-lg text-lipstick mr-8 md:mr-6"></i>
        </div>
      </div>

      {/* copy */}
      <p className="text-graylip font-mont">
        © 2022 Khunu. All rights reserved.
      </p>
    </div>
  );
}
