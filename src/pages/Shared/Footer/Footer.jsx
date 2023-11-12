import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white relative before:block before:absolute before:md:w-1/2 before:w-full before:-z-10 before:h-full before:left-0 before:top-0 before:bg-footer_color_primary  after:absolute after:md:w-1/2 after:w-full after:-z-10 after:h-full after:right-0 after:top-0 after:bg-footer_color_secondary">
      <div className="flex md:items-start items-center md:flex-row flex-col py-4">
        <div className="w-full h-full md:flex-1 md:p-20 p:10 flex gap-6 justify-center flex-col items-center">
          <h2 className="font-inter font-medium text-[32px]">CONTACT US</h2>
          <ul className="space-y-2 font-inter font-medium text-xl text-center">
            <li>123 ABS Street, Uni 21, Bangladesh</li>
            <li>+88 123456789</li>
            <li>Mon - Fri: 08:00 - 22:00</li>
            <li>Sat - Sun: 10:00 - 23:00</li>
          </ul>
        </div>
        <div className="w-full h-full md:flex-1 p-10 md:p-20  flex justify-center flex-col items-center">
          <h2 className="font-inter font-medium text-[32px] mb-6">Follow US</h2>
          <h3 className="text-xl font-medium">Join us on social media</h3>
          <ul className="mt-[32px] flex gap-6 text-3xl">
            <li>
              <FaFacebookF></FaFacebookF>
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <AiOutlineTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-text_color_primary flex justify-center items-center">
        <p className="md:text-xl text-base font-medium text-white py-4">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
