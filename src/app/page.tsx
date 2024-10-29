"use client";
import ComingSoon from "./components/ComingSoon";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-black">
      <ComingSoon />
      <Footer />
    </div>
  );
}
