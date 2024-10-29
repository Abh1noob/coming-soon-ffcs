import React from 'react'

export default function CommingSoon() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
      };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white ">
      <div className="top-4 left-0 right-0 absolute flex justify-center items-center px-6 py-4 text-sm text-gray-400">
        <div className="absolute">Payment | Services | Account</div>
        <button className="absolute right-6 bg-gray-800 px-3 py-1 rounded-md ">App Store</button>
      </div>

      <div className="flex flex-col items-center text-center ">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-red-500 p-6">
          Coming Soon
        </h1>
        <p className="text-gray-400 max-w-xl text-lg">
          From automation of people processes to creating an engaged and driven culture.
        </p>
        
        <form onSubmit={handleSubmit} className="flex items-center mt-6 w-full max-w-md"> 
          <input
            type="email"
            placeholder="Please enter your email address"
            className="flex-grow px-4 py-3 rounded-l-md bg-gray-800 text-white"
            required
          />
          <button type="submit" className="px-4 py-3 bg-white text-black rounded-r-md"> 
            Notify Me
          </button>
        </form>
        
        <div className="mt-4">
          <label className="flex items-center text-gray-500">
            <input type="checkbox" className="mr-2" />
            Notify me when the app is launched
          </label>
        </div>
      </div>
    </div>
  )
}
