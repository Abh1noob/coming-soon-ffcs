import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FFCS | CodeChef-VIT",
  description:
    "Struggling to navigate FFCS or build the perfect timetable? We've got something for you. Stay tuned!",
  icons: [{ rel: "icon", url: "/cc-logo.svg" }],
  openGraph: {
    title: "CodeChef-VIT",
    images: [{ url: "/open-graph.png" }],
    url: "https://ffcs.codechefvit.com",
    type: "website",
    description: "Made with ♡ by CodeChef-VIT",
    siteName: "FFCS | CodeChef-VIT",
  },
  applicationName: "FFCS | CodeChef-VIT",
  keywords: [
    "CodeChef",
    "VIT",
    "Vellore Institute of Technology",
    "CodeChef-VIT",
    "FFCS",
    "FFCS VIT",
    "FFCS Planner",
    "VIT FFCS",
    "Fully Flexible Credit System",
    "Planner",
    "FFCS CodeChef",
    "codechef ffcs planner",
    "codechef",
    "codechef ffcs",
    "ffcs codechef",
    "College Course Planner",
    "Academic Planner",
    "Student Course Management",
    "University Course Scheduler",
    "VIT Course Registration",
    "FFCS VIT App",
    "VIT Student Planner",
    "VIT Course Selection",
    "FFCS Scheduling Tool",
    "Student Productivity Tools",
    "Academic Success Planner",
    "Course Management Software",
    "University Planning App",
    "Flexible Course Selection VIT",
    "How to use FFCS VIT effectively",
    "Best practices for course selection at VIT",
    "Tips for managing schedules in FFCS",
    "Guide to FFCS at VIT",
    "CodeChef resources for VIT students",
    "Online Course Management",
    "Digital Student Planner",
    "Academic Scheduling Software",
    "Student Information Systems",
    "VIT Academic Resources",
    "FFCS app for VIT students",
    "VIT flexible credit system",
    "CodeChef VIT study tools",
    "Managing FFCS at VIT",
    "VIT credit system explained",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: "CodeChef-VIT",
    url: "https://codechefvit.com",
  },
  publisher: "CodeChef-VIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[url('/background.png')] bg-cover bg-center min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
