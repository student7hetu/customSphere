import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-33" />
          <p className="w-full md:w-2/3 text-gray-600">
            CustomSphere is your go-to destination for high-quality custom
            t-shirts and personalized apparel. We offer unique designs, premium
            fabric, and seamless customization options to help you express your
            style effortlessly. Whether for personal wear, gifting, or branding,
            CustomSphere ensures top-notch quality and comfort in every piece.
            🚀
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/">Delivey</Link>
            </li>
            <li>
              <Link to="/policy">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Connect us</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9099999999</li>
            <li>123@customsphere.com</li>
          </ul>
        </div>
      </div>
      <dir>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2024 CustomSphere. All rights reserved.
        </p>
      </dir>
    </div>
  );
};

export default Footer;
