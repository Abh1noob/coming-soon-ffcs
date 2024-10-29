"use client";
import { useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/collect-email", { email });
      if (response.status === 200) {
        setMessage("Thank you! You’ll be notified soon.");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden  h-full flex-1 flex flex-col justify-between min-h-screen ">
      <div className="flex-1 items-center justify-center flex p-8">
        <div className="flex flex-col items-center justify-center text-white h-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-red-500 p-6">
              Coming Soon
            </h1>
            <p className="text-gray-400 max-w-xl text-lg">
              Struggling to navigate FFCS or build the perfect timetable?
              We&apos;ve got something for you. Stay tuned!
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center mt-6 w-full max-w-md mx-auto justify-center"
            >
              <input
                type="email"
                placeholder="Please enter your email address"
                className="grow px-4 py-3 rounded-l-md bg-gray-800 text-white outline-none focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-white text-black rounded-r-md"
                disabled={loading}
              >
                {loading ? "Loading..." : "Notify Me"}
              </button>
            </form>

            {message && <p className="mt-4 text-sm text-gray-400">{message}</p>}
          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-gray-700"></div>
      <Footer />
    </div>
  );
}
