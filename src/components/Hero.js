export default function Hero() {
  return (
    <section className="bg-[url(/hero.webp)] bg-no-repeat bg-cover h-screen bg-bottom">
      <div className="absolute flex flex-col items-start top-[40%] left-0 lg:left-[5%]">
        <div className="bg-[#636953a6] py-5 px-2.5 md:py-[40px] md:px-[80px] rounded-lg">
          <div class="flex flex-col items-start gap-5">
            <h1 class="text-white font-bold text-xl md:text-4xl max-w-[500px]">
              Ingin Memiliki Luxury Villa di Sebuah Resort?
            </h1>
            <h2 class="text-white max-w-[500px]">
              Keinginan untuk memilikinya bukan lagi sekedar mimpi. Hubungi tim
              kami untuk berdiskusi lebih lanjut mengenai peluang menarik untuk
              Anda dan keluarga.
            </h2>
            <button class="font-semibold text-white bg-yellow-600 hover:bg-yellow-700 py-3 px-5 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
