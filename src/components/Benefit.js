import Image from "next/image";
export default function Benefit() {
  return (
    <section className="flex flex-col p-5 space-y-10 ">
      <div className="flex flex-col items-center justify-center w-full mx-auto lg:space-x-10 lg:px-10 lg:py-10 lg:flex-row xl:space-x-20">
        <div className="space-y-5 max-w-[500px]">
          <h2 className="text-3xl font-bold">
            Invest in Indonesia’s Luxury Boutique Resort-Hotel Properties
          </h2>
          <p>
            Properti luxury resort 5-star yang didesain dan dipersiapkan untuk
            bersanding pada salah satu destinasi wisata terfavorit dunia.
            Menawarkan investor perpaduan yang sempurna dari rental return
            tertinggi & pengalaman menginap berkelas, semua ada dalam satu
            properti.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex w-auto gap-5 lg:space-x">
            <img
              src="/benefit1.jpg"
              alt="benefit"
              className="h-[250px] w-full lg:h-[350px] lg:w-[400px] object-cover"
            />
            <img
              src="/benefit2.jpg"
              alt="benefit"
              className="h-[250px] w-full lg:h-[350px] lg:w-[400px] object-cover"
            />
          </div>
          <img
            src="/benefit3.jpg"
            alt="benefit"
            className="object-cover w-full h-full mt-5 lg:mt-10"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 lg:px-10 lg:py-10 ">
        <div className="hidden lg:block">
          <img src="/benefit4.jpg" alt="" />
        </div>
        <div className="max-w-[500px] space-y-5">
          <h2 className="text-3xl font-bold">
            The Perfect Investment Opportunity is Here
          </h2>
          <p className="font-semibold">
            Ketika Anda memiliki villa di luxury resort, Anda memiliki lebih
            dari sekadar villa!
          </p>
          <p>
            Investasi Anda memiliki benefit dan value dari semua yang ditawarkan
            oleh resort ini. Mulai dari first-class facilities hingga lokasi
            resort yang strategis, menawarkan peluang investasi yang luar biasa
            untuk upgrade ultimate lifestyle dan juga returns, tanpa perlu repot
            atau budget investasi yang besar.
          </p>
          <button className="w-full px-10 py-3 mx-auto font-semibold text-white bg-yellow-600 rounded-full hover:bg-yellow-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
