import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Villa Co-Ownership",
    url: "/contact",
  },
  {
    title: "Properties Available",
    url: "/contact",
  },
  {
    title: "Testimonial",
    url: "/contact",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-[#091927] to-[#11283c] fixed top-0 z-10 mx-auto w-full">
      <div className="">
        <div className="flex justify-between px-5 py-4 ">
          <div className="">
            <Link href="/" className="">
              <img
                src="/logo-desktop.png"
                alt="logo"
                className="flex items-center justify-center w-[200px] h-auto"
              />
            </Link>
          </div>
          <div
            className={`fixed lg:static top-0 lg:flex lg:flex-row lg:items-center lg:bg-none bg-gradient-to-r from-[#091927] to-[#11283c] w-full lg:w-fit h-full lg:h-auto transition-all lg:transition-none ${
              offCanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              onClick={() => setOffCanvas(false)}
              className="absolute top-5 right-5 lg:hidden"
            >
              <svg
                className="w-10 h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            </button>
            <ul className="flex flex-col p-10 text-xl text-white lg:flex-row lg:space-x-7 lg:p-0 lg:items-center space-y-7 lg:space-y-0">
              {menuItems.map((item, index) => (
                <li key={index} className=" hover:text-yellow-500">
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Button (for mobile only) */}
          <button
            onClick={() => setOffCanvas(!offCanvas)}
            className="lg:hidden"
          >
            <svg
              className="w-10 h-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h22M5 16h22M5 24h22"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
