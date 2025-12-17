import Image from "next/image";

export default function Home() {
  return (
  <><div className="relative ">
      <img
        src="/images/bg1.jpg" />
    </div>
    <div className="relative bg-[#1f1f1f] text-white py-20 flex justify-center">

  {/* Grey inner body */}
      <div className="relative w-full mx-10 rounded-3xl bg-[#d9d9d9] p-10">

    {/* Diagonal lines overlay */}
    <div className="pointer-events-none absolute inset-0
      bg-[repeating-linear-gradient(
        45deg,
        rgba(0,0,0,0.05)_0,
        rgba(0,0,0,0.05)_1px,
        transparent_1px,
        transparent_8px
      )] rounded-3xl"
    />

    {/* Cards container */}
    <div className="relative flex flex-col md:flex-row gap-6 justify-center items-stretch">

      {/* Card 1 */}
      <div className="bg-white/25 backdrop-blur-xl rounded-3xl p-6 flex-1 flex flex-col justify-start">
        <h2 className="text-lg font-light mb-2 text-black">Transforming Spaces. Elevancing Lifestyles.</h2>
        <p className="text-xs font-semibold leading-relaxed text-black">
          We create timeless interiors that blend luxury, comfort, and functionality — crafted uniquely around your vision.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/25 backdrop-blur-xl rounded-3xl p-6 flex-1 flex flex-col justify-start">
        <h2 className="text-lg font-light mb-2 text-black">Designing With Purpose. Building With Precision.</h2>
        <p className="text-xs font-semibold leading-relaxed text-black">
          For over four decades, our team has delivered bespoke interior solutions that redefine modern living. From concept to completion, we ensure every detail reflects craftsmanship, creativity, and trust.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/25 backdrop-blur-xl rounded-3xl p-6 flex-1 flex flex-col justify-start">
        <h2 className="text-lg font-light mb-2 text-black">40+ Years of Excellence in Interior Design</h2>
        <p className="text-xs font-semibold leading-relaxed text-black">
          We’ve been turning homes, offices, and commercial spaces into inspired environments since 1980. Our reputation is built on quality, transparency, and long-term client satisfaction.
        </p>
      </div>

    </div>
      </div>
    </div>


    <div className="p-10">
      <h1 className="m-10 font-extrabold text-2xl text-[#166cff]">Our work has earned recognition from leading architects, clients, and consultants, thanks to:</h1>
      <div className='bg-[url("/images/texture1.jpg")] bg-center bg-cover rounded-2xl p-10 gap-5 m-10 flex flex-col justify-center content-center'>
        <div className="text-white font-bold text-xl"><h1>What Do We Offer ?</h1></div>
        <div>
          <ul className="text-white space-y-2 font-semibold">
            <li>High-quality construction standards</li>
            <li>An excellent safety records</li>
            <li>Competitive tendering practices</li>
            <li>Professional project management</li>
            <li>A proven track record of meeting stringent deadlines</li>
            <li>A cooperative and proactive client-first approach</li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
}
