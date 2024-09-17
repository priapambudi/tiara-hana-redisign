export default function Join() {
  return (
    <div className="flex flex-col items-center justify-center p-5 space-y-10 lg:py-10 lg:space-y-0 lg:p-0 lg:flex-row ">
      <div className="flex flex-col justify-center space-y-5 max-w-[500px]">
        <h2 className="text-3xl font-bold">
          Ingin Memiliki Luxury Villa di Sebuah Resort?
        </h2>
        <p>
          Keinginan untuk memilikinya bukan lagi sekedar mimpi. Hubungi tim kami
          untuk berdiskusi lebih lanjut mengenai peluang menarik untuk Anda dan
          keluarga.
        </p>
        <button className="px-5 py-3 font-semibold text-white bg-yellow-600 rounded-full lg:w-fit hover:bg-yellow-700">
          Whatsapp Us
        </button>
      </div>
      <div>
        <img src="/join.jpg" alt="" />
      </div>
    </div>
  );
}
