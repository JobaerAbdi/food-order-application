// import Image from "next/image";

import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br/> is better <br/> with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-gray-500 my-4">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4">
          <button className="bg-primary px-4 py-2 rounded-full text-white flex items-center gap-1 text-sm">
            Order Now
            <Right />
          </button>
          <button className="text-gray-500 flex gap-1 py-2 font-semibold text-sm items-center">
            Learn More
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image src="/pizza.png" layout="fill" objectFit="contain" alt="pizza" />
      </div>
    </section>
  );
}
