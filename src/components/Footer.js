import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-col p-5 bg-gradient-to-r from-[#091927] to-[#11283c] text-white">
      <div className="grid grid-cols-1 gap-5 text-center lg:gap-0 place-items-center lg:place-items-start lg:flex ">
        <div className="flex flex-col items-center w-1/3">
          <Link href="/">
            <img
              src="/footer-logo.webp"
              alt="footer"
              className="w-[100px] h-[100px]"
            />
          </Link>
          <button className="px-3 py-1 font-semibold text-white bg-yellow-600 rounded-full lg:px-5 lg:py-3 hover:bg-yellow-700">
            Book Appointment
          </button>
        </div>
        <div className="flex flex-col w-1/3 space-y-5">
          <h2 className="text-xl text-yellow-500">Our Address</h2>
          <div>
            <p>PT. Tiara Hana Indonesia</p>
            <p>Luxury Property Company</p>
          </div>
          <div>
            <Link href="https://goo.gl/maps/8S5n5UwqJWJ2">
              Gd. Puri Begawan Lantai 1, Jl. Pajajaran No. 05-07, Kota Bogor,
              Jawa Barat 16143
            </Link>
          </div>
          <Link href="https://goo.gl/maps/8S5n5UwqJWJ2">
            {" "}
            Pondok Indah Office Tower 2, 15th Floor Jl. Sultan Iskandar Muda,
            Jakarta Selatan 12310
          </Link>
        </div>
        <div className="flex flex-col w-1/3 space-y-5">
          <h2 className="text-xl text-yellow-500">Opening Hours</h2>
          <p>Senin - Jumat | 09.00 - 17.00</p>
          <p>WhatsApp : +62 811 1117 916</p>
          <div className="flex items-center justify-center space-x-2">
            <svg
              className="w-10 h-10 p-2 text-yellow-500 border border-yellow-500 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            <svg
              className="w-10 h-10 p-2 text-yellow-500 border border-yellow-500 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
              />
            </svg>
            <svg
              className="w-10 h-10 p-2 text-yellow-500 border border-yellow-500 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <p className="text-center text-yellow-500">
        © 2012 - 2024 Tiara Hana. | All Rights Reserved.
      </p>
    </section>
  );
}
