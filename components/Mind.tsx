import React from "react";
import img from "../public/images.jpg";
import img1 from "../public/images1.jpg";
import img2 from "../public/images2.jpg";
import MindComponent from "@/components/MindComponent";
import Link from "next/link";

const Mind = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-xl mx-auto p-16 md:p-32">
        <h1 className="text-4xl font-bold pb-3 md:pb-6">
          We have web
          <br /> accessibility in mind
        </h1>
        <h2 className="text-base text-gray-500 leading-6">
          Our mission is to empower organizations to make their web
          <br />
          content accessible to people with disabilities.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 py-5 md:py-10">
          <MindComponent
            heading2="Accessibility Training"
            para1="Whether here in Utah or on-site at your organization,WebAIM can
            provide web and document training to fit your needs."
            src={img}
          />
          <MindComponent
            heading2="StrategicA11y"
            para1="The Strategic Web Accessibility Workshop will help participants
            make strategic plans for the accessibility of their organizations."
            src={img1}
          />
          <MindComponent
            heading2="Technical Assistance"
            para1="Need assistance implementing accessibility?WebAIM's expert staff 
            can provide the assistance you need."
            src={img2}
          />
          <MindComponent
            heading2="Evaluation and Reporting"
            para1="we can provide reports to help you know how
            accessible your site is and how to make it better."
            src={img2}
          />
        </div>
        <div className="flex gap-2 text-blue-800 text-xs">
          <Link href="#">Blog</Link>.<Link href="#">Newsletter</Link>.
          <Link href="#">Discussion List</Link>.<Link href="#">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Mind;
