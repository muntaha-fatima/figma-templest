"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-[#F5F7FA] sm:w-full md:max-w-[960px] lg:max-w-[1640px]">
      <header className="flex justify-between items-center p-4 md:p-6 text-black px-6 md:px-[144px]">
        <div className="flex items-center gap-2">
          <Image
            src="/image/Icon (4).png"
            alt="Illustration"
            width={40}
            height={25}
          />
          <h3 className="text-black font-bold text-xl md:text-2xl">Nextcent</h3>
        </div>
        <ul className="hidden md:flex gap-8 lg:gap-16 text-sm font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Service</li>
          <li className="hover:text-blue-500 cursor-pointer">Feature</li>
          <li className="hover:text-blue-500 cursor-pointer">Product</li>
          <li className="hover:text-blue-500 cursor-pointer">Testimonial</li>
          <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
        </ul>
        <div className="hidden md:flex gap-4">
          <Button variant="ghost" className="text-green-500">
            Login
          </Button>
          <Button className="text-sm px-3 py-2 bg-green-500 text-white">
            Sign Up
          </Button>
        </div>
        <button
          className="text-black focus:outline-none text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </header>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-10 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Service</li>
            <li className="hover:text-blue-500 cursor-pointer">Feature</li>
            <li className="hover:text-blue-500 cursor-pointer">Product</li>
            <li className="hover:text-blue-500 cursor-pointer">Testimonial</li>
            <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Button variant="ghost" className="text-green-500 w-full">
              Login
            </Button>
            <Button className="text-sm px-3 py-2 bg-green-500 text-white w-full">
              Sign Up
            </Button>
          </div>
        </div>
      )}
<main className="mt-10 p-4 md:p-16 md:pl-36 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
  <div className="text-center md:text-left">
    <h1 className="text-[32px] md:text-[64px] font-bold text-gray-800 leading-tight">
      Lessons and insights
    </h1>
    <h2 className="text-[32px] md:text-[64px] font-semibold text-[#4CAF4F] -mt-2 md:-mt-6">
      from 8 years
    </h2>
    <p className="text-[14px] md:text-[16px] text-[#717171] mt-4">
      Where to grow your business as a photographer: site or social media?
    </p>
    <div className="mt-6">
      <Button className="px-6 py-3 bg-[#4CAF4F] text-white rounded-[4px] text-[14px] md:text-[16px]">
        Register
      </Button>
    </div>
  </div>

  <div className="flex justify-center md:px-10">
    <Image
      src="/image/Illustration.png"
      alt="Illustration"
      width={300}
      height={300}
      className="w-full md:w-auto"
    />
  </div>
</main>

<div className="flex justify-center items-center mt-6 md:mt-10 mb-4">
  <div className="flex space-x-2">
    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full opacity-30"></div>
    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full opacity-30"></div>
  </div>
</div>

<div className="bg-white sm:w-full md:max-w-[960px] lg:max-w-[1640px]">
  <div className="text-center p-4">
    <h1 className="leading-8 text-2xl md:text-3xl text-[#4D4D4D] font-bold">
      Our Clients
    </h1>
    <p className="leading-6 text-[#717171] font-normal text-sm md:text-xs">
      We have been working with some Fortune 500+ clients
    </p>
  </div>
  <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 px-8 md:px-36 pt-6">
    {["Logo (4)", "Logo (3)", "Logo (2)", "Logo (1)", "Logo", "Logo (7)", "6logo"].map((logo, index) => (
      <Image
        key={index}
        src={`/image/${logo}.png`}
        alt="Logo"
        width={48}
        height={48}
      />
    ))}
  </div>

  <div className="text-center pt-8 md:pt-12">
    <h1 className="font-semibold text-2xl md:text-[36px] leading-8 md:leading-10 text-[#4D4D4D]">
      Manage your entire community <br /> in a single system
    </h1>
    <p className="leading-5 md:leading-6 text-[#717171] text-sm md:text-xs mt-2">
      Who is Nextcent suitable for?
    </p>
  </div>

  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 px-8 md:px-36 pt-6">
    {[
      { img: "Icon (1)", title: "Membership Organisations" },
      { img: "Icon (6)", title: "National Associations" },
      { img: "Icon (5)", title: "Clubs And Groups" },
    ].map((item, index) => (
      <div
        key={index}
        className="w-full md:w-[299px] p-6 shadow-sm rounded-lg text-center md:text-left"
      >
        <Image
          src={`/image/${item.img}.png`}
          alt={item.title}
          width={65}
          height={56}
          className="mx-auto md:mx-0"
        />
        <h1 className="font-bold text-xl md:text-[28px] leading-8 md:leading-9 text-[#4D4D4D] mt-4">
          {item.title}
        </h1>
        <p className="text-sm md:text-[14px] leading-5 text-[#717171] mt-2">
          Our membership management software provides full automation of membership renewals and payments
        </p>
      </div>
    ))}
  </div>
</div>
 <div className="bg-white flex flex-col md:flex-row items-center px-6 sm:px-12 lg:px-20 pt-10 md:pt-20 w-full max-w-[1640px] mx-auto">
  <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
    <Image
      src="/image/Frame 35.png"
      alt="Illustration"
      width={442}
      height={433}
      className="w-full max-w-[442px] h-auto"
    />
  </div>
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="font-semibold text-[#4D4D4D] text-2xl sm:text-3xl leading-[44px] pb-4">
      The unseen of spending three <br /> years at Pixelgrade
    </h1>
    <p className="text-[#717171] text-sm sm:text-base leading-5 pb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
       Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
      Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
    </p>
    <div className="flex justify-center md:justify-start">
      <Button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#4CAF4F] text-white rounded-sm text-sm sm:text-base">
        Learn More
      </Button>
    </div>
  </div>
</div>
<div className="bg-[#F5F7FA] flex flex-col md:flex-row justify-between px-6 sm:px-8 md:px-36 py-8 md:py-16">
  <div className="w-full md:w-[50%]">
    <h1 className="font-semibold text-[#4D4D4D] text-2xl sm:text-3xl leading-8 sm:leading-[44px]">
      Helping a local <br />
      <span className="font-semibold text-[#4CAF4F]">business reinvent itself</span>
    </h1>
    <p className="font-normal text-sm sm:text-base leading-5 sm:leading-6 text-[#18191F] mt-4">
      We reached here with our hard work and dedication
    </p>
  </div>
  <div className="flex flex-wrap gap-6 justify-between md:justify-end mt-6 md:mt-0 mr-8">
    <div className="flex items-center">
      <div className="pr-4">
        <Image src="/image/Icon (2).png" alt="Illustration" width={48} height={48} />
      </div>
      <div>
        <p className="font-bold text-[#4D4D4D] text-lg">2,245,341</p>
        <p className="font-normal text-sm text-[#717171]">Members</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="pr-4">
        <Image src="/image/Icon (8).png" alt="Illustration" width={48} height={48} />
      </div>
      <div>
        <p className="font-bold text-[#4D4D4D] text-lg">46,328</p>
        <p className="font-normal text-sm text-[#717171]">Clubs</p>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-end px-6 flex-col md:flex-row sm:px-8 md:px-36 mt-4">
  <div className="flex items-center md:-mt-36">
    <div className="pr-4">
      <Image src="/image/Icon (3).png" alt="Illustration" width={48} height={48} />
    </div>
    <div>
      <p className="font-bold text-[#4D4D4D] text-lg">828,867</p>
      <p className="font-normal text-sm text-[#717171]">Event Bookings</p>
    </div>
  </div>
  <div className="flex items-center md:ml-6 mt-7 md:-mt-36">
    <div className="pr-4">
      <Image src="/image/Icon (7).png" alt="Illustration" width={48} height={48} />
    </div>
    <div>
      <p className="font-bold text-[#4D4D4D] text-lg">1,926,436</p>
      <p className="font-normal text-sm text-[#717171]">Payments</p>
    </div>
  </div>
</div>

<div className="bg-white flex flex-col-reverse md:flex-row items-center px-6 sm:px-8 md:px-36 py-8">
<div className="w-full md:w-1/2 flex justify-center">
    <Image src="/image/pana.png" alt="Illustration" width={442} height={433} />
  </div>
  <div className="w-full md:w-1/2 mt-6 md:mt-0">
    <h1 className="font-semibold text-[#4D4D4D] text-2xl sm:text-3xl leading-8 sm:leading-[44px]">
      How to design your site footer like we did
    </h1>
    <p className="text-[#717171] text-sm sm:text-base leading-5 mt-4">
      Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
      molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
      libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
      nisi facilisis finibus.
    </p>
    <div className="mt-6">
      <Button className="px-6 py-3 bg-[#4CAF4F] text-white rounded-md text-sm sm:text-base">
        Learn More
      </Button>
    </div>
  </div>
  
</div>

<div className="bg-[#F5F7FA] flex flex-col-reverse sm:flex-row items-center px-6 sm:px-8 md:px-36 py-8">
  <div className="w-full sm:w-1/2 flex justify-center">
    <Image src="/image/image 9.png" alt="Illustration" width={326} height={326} />
  </div>
<div className="w-full h-auto pt-9 sm:w-full">
  <p className="text-[#717171] text-base leading-6 pb-5 font-medium">
    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt
    ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu,
    at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
    ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
    Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero
    condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
  </p>
  <div className="text-[#4CAF4F]">
    <h3 className="text-lg sm:text-base font-semibold">Tim Smith</h3>
    <p className="text-[#89939E] text-base leading-6 pt-2 font-normal">
      British Dragon Boat Racing Association
    </p>
  </div>
  <div className="flex flex-wrap justify-between gap-5 pt-7">
    <div>
      <Image src="/image/Logo (4).png" alt="Illustration" width={48} height={48} />
    </div>
    <div>
      <Image src="/image/Logo (3).png" alt="Illustration" width={48} height={48} />
    </div>
    <div>
      <Image src="/image/Logo (2).png" alt="Illustration" width={48} height={48} />
    </div>
    <div>
      <Image src="/image/Logo (1).png" alt="Illustration" width={48} height={48} />
    </div>
    <div>
      <Image src="/image/Logo.png" alt="Illustration" width={48} height={48} />
    </div>
    <div>
      <Image src="/image/Logo (7).png" alt="Illustration" width={48} height={48} />
    </div>
    <div className="text-[#4CAF4F] flex items-center">
      <span className="font-medium text-base">Meet all customers ➡</span>
    </div>
  </div>
</div>
</div>
<div className="bg-white pb-28 pt-9 px-6 sm:pt-32 sm:px-12 lg:px-36">
  <div className="w-full text-center max-w-[1110px] mx-auto mb-12">
    <h1 className="font-semibold text-[#4D4D4D] text-2xl sm:text-3xl leading-[44px] mb-4">
      Caring is the new marketing
    </h1>
    <p className="text-[#717171] text-sm sm:text-base leading-6">
      The Nexcent blog is the best place to read about the latest membership insights, trends, and more.
      See who&apos;s joining the community, read about how our community is increasing their membership income, and much more.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
    <div className="flex-1 flex flex-col items-center lg:items-start">
      <Image
        src="/image/image 18.png"
        alt="Illustration"
        width={438}
        height={438}
        className="w-full max-w-[438px]"
      />
      <div className="bg-[#F5F7FA] flex flex-col justify-center items-center w-full max-w-[317px] h-[161px] rounded-[8px] mt-6 lg:ml-0">
        <h4 className="text-[#717171] text-base sm:text-lg font-semibold text-center px-4">
          Creating Streamlined Safeguarding Processes with OneRen
        </h4>
        <p className="text-[#4CAF4F] text-base sm:text-lg font-semibold mt-4">
          Read more ➡
        </p>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center lg:items-start">
      <Image
        src="/image/image 19.png"
        alt="Illustration"
        width={438}
        height={438}
        className="w-full max-w-[438px]"
      />
      <div className="bg-[#F5F7FA] flex flex-col justify-center items-center w-full max-w-[317px] h-[161px] rounded-[8px] mt-6 lg:ml-0">
        <h4 className="text-[#717171] text-base sm:text-lg font-semibold text-center px-4">
          Creating Streamlined Safeguarding Processes with OneRen
        </h4>
        <p className="text-[#4CAF4F] text-base sm:text-lg font-semibold mt-4">
          Read more ➡
        </p>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center lg:items-start">
      <Image
        src="/image/image 20.png"
        alt="Illustration"
        width={438}
        height={438}
        className="w-full max-w-[438px]"
      />
      <div className="bg-[#F5F7FA] flex flex-col justify-center items-center w-full max-w-[317px] h-[161px] rounded-[8px] mt-6 lg:ml-0">
        <h4 className="text-[#717171] text-base sm:text-lg font-semibold text-center px-4">
          Creating Streamlined Safeguarding Processes with OneRen
        </h4>
        <p className="text-[#4CAF4F] text-base sm:text-lg font-semibold mt-4">
          Read more ➡
        </p>
      </div>
    </div>
  </div>
</div>
<div className="bg-[#F5F7FA] py-12 px-6 sm:px-12 lg:px-36">
  <h4 className="font-semibold text-[#263238] text-2xl sm:text-3xl lg:text-4xl leading-tight text-center mb-6">
    Pellentesque suscipit<br />fringilla libero eu.
  </h4>
  <div className="flex justify-center">
    <Button className="px-6 sm:px-8 py-4 sm:py-6 bg-[#4CAF4F] text-white rounded-sm text-sm sm:text-base">
      Get a Demo ➡
    </Button>
  </div>
</div>
<div className="bg-[#263238] px-6 py-10 sm:w-full md:max-w-[960px] lg:max-w-[1640px] mx-auto">
  <div className="flex flex-col lg:flex-row justify-between items-start">
    
    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
      <div className="flex items-center gap-2">
        <Image
          src="/image/Icon (4).png"
          alt="Illustration"
          width={43}
          height={29}
        />
        <h3 className="text-white font-bold text-2xl pb-4">Nextcent</h3>
      </div>
      <p className="text-slate-200 font-normal text-sm mt-4">
        Copyright © 2020 Nexcent ltd.
      </p>
      <p className="text-slate-200 font-normal text-sm pb-4">All rights reserved</p>
      <div className="flex gap-3 mt-4">
        <Link href="#" target="_blank">
          <Image
            src="/image/insta.jpg"
            alt="Instagram"
            width={30}
            height={30}
            className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Link href="#" target="_blank">
          <Image
            src="/image/icons8-dribbble-32.png"
            alt="Dribbble"
            width={30}
            height={30}
            className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Link href="#" target="_blank">
          <Image
            src="/image/twitter.jpg"
            alt="Twitter"
            width={30}
            height={30}
            className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Link href="#" target="_blank">
          <Image
            src="/image/youtube-logo-white-transparent-19.png"
            alt="YouTube"
            width={30}
            height={30}
            className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>

    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
      <h4 className="text-white font-bold text-lg">Company</h4>
      <ul className="mt-4 text-slate-200 space-y-2">
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
    </div>

    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
      <h4 className="text-white font-bold text-lg">Support</h4>
      <ul className="mt-4 text-slate-200 space-y-2">
        <li>Help center</li>
        <li>Terms of service</li>
        <li>Legal</li>
        <li>Privacy policy</li>
        <li>Status</li>
      </ul>
    </div>

    <div className="w-full lg:w-1/4">
      <h4 className="text-white font-bold text-lg pb-2">Stay up to date</h4>
      <div className="mt-4">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 text-sm text-white bg-gray-500 rounded-md focus:outline-none"
        />
      </div>
    </div>
  </div>
</div>
</div>
);
}