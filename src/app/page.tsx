"use client";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-black h-full flex-1 flex flex-col justify-between min-h-screen">
      <div className="flex-1 items-center justify-center flex p-8">
        <div className=" flex flex-col items-center justify-center text-white h-full">
          <div className="flex flex-col items-center text-center ">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-red-500 p-6">
              Coming Soon
            </h1>
            <p className="text-gray-400 max-w-xl text-lg">
              From automation of people processes to creating an engaged and
              driven culture.
            </p>

            <form
              onSubmit={() => {}}
              className="flex items-center mt-6 w-full max-w-md mx-auto justify-center"
            >
              <input
                type="email"
                placeholder="Please enter your email address"
                className=" grow px-4 py-3 rounded-l-md bg-gray-800 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-white text-black rounded-r-md"
              >
                Notify Me
              </button>
            </form>

          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-gray-700"></div>
      <Footer />
    </div>
  );
}
