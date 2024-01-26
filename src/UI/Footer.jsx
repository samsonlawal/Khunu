export default function Footer() {
  return (
    <div className="px-4 pb-8 text-center md:text-left md:px-8 lg:flex lg:flex-row lg:justify-center lg:items-end">
      {/* Links */}
      <div className="py-8 flex flex-col justify-center items-center md:flex-row md:justify-start md:items-end lg:flex lg:flex-row lg:justify-center lg:items-end">
        <div className="py-2 mr-5">
          <p className="text-lipstick text-lg font-bold pb-4">Contact</p>
          <p>debra.holt@example.com</p>
        </div>

        {/* socials */}
        <div className=" md:pb-2 md:pl-10">
          <i class="fa-brands fa-facebook-f text-lg text-lipstick mr-2"></i>
          <i class="fa-brands fa-twitter text-lg text-lipstick mr-2"></i>
          <i class="fa-brands fa-instagram text-lg text-lipstick mr-2"></i>
        </div>
      </div>

      {/* copy */}
      <p className="text-graylip">© 2022 Khunu. All rights reserved.</p>
    </div>
  );
}
