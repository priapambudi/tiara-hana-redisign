export default function Testi() {
  return (
    <section className="bg-[url(/testi.jpg)] bg-no-repeat bg-cover bg-testi">
      <div className="flex justify-center lg:justify-end lg:mr-16">
        <div className="flex flex-col space-y-5 justify-center h-[500px] w-fit lg:w-[500px] lg:items-end text-white px-16">
          <h2 className="text-2xl font-bold text-yellow-500">
            Read our Customers Stories
          </h2>
          <p className="lg:text-right font-light max-w-[500px]">
            Simak berbagai kisah customer kami dalam mewujudkan impian mereka.
            Dengan menambahkan resort villa satu persatu dapat membangun
            portofolio pr operti impian, sekaligus meningkatkan gaya hidup dan
            kualitas hidup keluarga mereka
          </p>
          <button className="px-5 py-3 font-semibold text-white bg-yellow-600 rounded-full lg:w-fit hover:bg-yellow-700">
            Read Testimonial
          </button>
        </div>
      </div>
    </section>
  );
}
