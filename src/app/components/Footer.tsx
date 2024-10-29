"use client";
import ccLogo from "../assests/codechef_logo.svg";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Github } from "lucide-react";
import meta_icon_dark from "../assests/meta_icon_dark.svg";
import x_twitter_icon_dark from "../assests/x_twitter_icon_dark.svg";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-12 py-4  text-white">
      <div className="flex items-center gap-4">
        <Image
          src={ccLogo as HTMLImageElement}
          alt="codechef-logo"
          height={70}
          width={70}
        />
        <p className="jost text-2xl font-bold lg:text-4xl m-4">CodeChef-VIT</p>
      </div>
      
      <div className="flex gap-4 mt-4 lg:mt-0">
        <Link href="https://www.instagram.com/codechefvit/">
          <Button variant="ghost" size="icon">
            <Instagram />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/company/codechefvit/">
          <Button variant="ghost" size="icon">
            <Linkedin />
          </Button>
        </Link>
        <Link href="https://www.youtube.com/@CodeChefVIT">
          <Button variant="ghost" size="icon">
            <Youtube />
          </Button>
        </Link>
        <Link href="https://github.com/CodeChefVIT">
          <Button variant="ghost" size="icon">
            <Github />
          </Button>
        </Link>
        <Link href="https://www.facebook.com/codechefvit/">
          <Button variant="ghost" size="icon">
            <Image
              src={meta_icon_dark as HTMLImageElement}
              alt="meta-icon"
              height={24}
              width={24}
            />
          </Button>
        </Link>
        <Link href="https://x.com/codechefvit" className="pb-1.5">
          <Button variant="ghost" size="icon">
            <Image
              src={x_twitter_icon_dark as HTMLImageElement}
              alt="x_twitter_icon"
              height={24}
              width={24}
              className="mb-2"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
