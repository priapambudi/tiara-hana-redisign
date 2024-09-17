import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";

const products = [
  { id: 1, name: "Royal Garden 3 Bedroom Pool Villa", img: "/product1.jpg" },
  { id: 2, name: "Grand 3 Bedroom Pool Villa", img: "/product2.jpg" },
  { id: 3, name: "Grand Family 3 Bedroom Pool Villa", img: "/product3.jpg" },
];

export default function Product() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 p-10 lg:flex-row">
      {products.map((product) => (
        <div key={product.id} className="relative w-full lg:w-auto group">
          <img
            src={product.img}
            alt={product.name}
            className="object-cover w-full lg:w-[350px] h-[300px]"
          />
          <h2 className="absolute bottom-0 left-0 w-full p-4 text-3xl font-bold text-center text-white transition-opacity duration-300 transform translate-y-4 opacity-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-100 group-hover:translate-y-0">
            {product.name}
          </h2>
        </div>
      ))}
    </section>
  );
}
