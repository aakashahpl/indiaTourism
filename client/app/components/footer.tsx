"use client";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="main bg-slate-700 pb-4 mt-60">
        <div className="flex justify-center ">
          <Image
            className="  mt-10"
            src={"/logo3.png"}
            width={130}
            height={130}
            alt=""
          />
        </div>

        {/* states and contact  */}
        <div className="flex w-full m-10 ">
          {/* Contact Details */}
          <div className=" border-[rgb(224,255,255)]  leading-7  border-r-2 text-white text-left py-4  w-[200px] h-[290px]">
            <p className=" mb-2 text-[rgb(224,255,255)] text-[18px] font-bold no-underline hover:underline underline-offset-8">
              Contact Details
            </p>
            <div className="leading-7 text-xs/[18px]">
              <p>Deputy Secretary (IT)</p>
              <p>Ministry of Tourism,</p>
              <p>Transport Bhawan</p>
              <p>Sansad Marg,</p>
              <p>New Delhi</p>
              <p>☏ +91-011-23724175</p>
              <p>✉ info.mot@gov.in</p>
            </div>
            {/* find us on  */}
            <div className=" flex justify-start space-x-4 mt-3 ">
              <a className="hover:scale-125 " href="#">
                <CiLinkedin size={22} className="hover:bg-black-700" />
              </a>
              <a className="hover:scale-125 " href="#">
                <FiTwitter size={22} />
              </a>
              <a className="hover:scale-125 " href="#">
                <BsInstagram size={22} />
              </a>
              <a className="hover:scale-125 " href="#">
                <BiLogoFacebook size={22} />
              </a>
            </div>
          </div>
          {/* State Tourism Website */}
          <div className="border-orange-700 leading-7  text-white py-4 h-[280px] items-center w-5/12 text-justify ml-8 ">
            <p className="mb-2 text-[rgb(224,255,255)]  text-[18px] font-bold no-underline hover:underline underline-offset-8 ">
              State Tourism Website
            </p>

            <div className="flex m-2 text-white justify-between self-start text-xs/[18px]">
              <a href="https://uttarakhandtourism.gov.in/">Andhra Pradesh</a>
              <a href="https://www.tourism.rajasthan.gov.in/">
                Arunachal Pradesh
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Assam</a>
            </div>
            <div className="flex m-2 text-white justify-between self-start text-xs/[18px]  ">
              <a href="https://uttarakhandtourism.gov.in/">Chhattisgarh</a>
              <a
                className="ml-[-55px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Goa
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Gujarat</a>
            </div>
            <div className="flex m-2 text-white justify-between text-xs/[18px]  text-left">
              <a href="https://uttarakhandtourism.gov.in/">Haryana</a>
              <a
                className="ml-[55px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Himachal Pradesh
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Rajasthan</a>
            </div>
            <div className="flex m-2 text-white justify-between text-xs/[18px]  text-left">
              <a href="https://uttarakhandtourism.gov.in/">Jharkhand</a>
              <a
                className="ml-[-16px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Karnataka
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Kerela</a>
            </div>
            <div className="flex m-2 text-white justify-between text-xs/[18px]  text-left">
              <a href="https://uttarakhandtourism.gov.in/">Madyha Pradesh</a>
              <a
                className="ml-[-23px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Maharashtra
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Manipur</a>
            </div>
            <div className="flex m-2 text-white justify-between text-xs/[18px]  text-left">
              <a href="https://uttarakhandtourism.gov.in/">Meghalaya</a>
              <a
                className="ml-[-7px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Mizoram
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Nagaland</a>
            </div>
            <div className="flex m-2 text-white justify-between text-xs/[18px]  text-left">
              <a href="https://uttarakhandtourism.gov.in/">Odisha</a>
              <a
                className="ml-[-10px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Punjab
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Sikkim</a>
            </div>
            <div className="flex m-2 text-white justify-between text-xs/[18px]  text-left">
              <a href="https://uttarakhandtourism.gov.in/">Tamil Nadu</a>
              <a
                className="ml-[-14px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Telangana
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Tripura</a>
            </div>
            <div className="flex m-2 text-white justify-between text-xs/[18px]  text-left">
              <a href="https://uttarakhandtourism.gov.in/">Uttar Pradesh</a>
              <a
                className="ml-[9px]"
                href="https://www.tourism.rajasthan.gov.in/"
              >
                Uttarakhand
              </a>
              <a href="https://www.tourism.rajasthan.gov.in/">Puducherry</a>
            </div>
          </div>
          {/*   UT Tourism Website */}
          <div className="border-[rgb(224,255,255)] leading-7  text-white py-4 h-[280px] items-center w-1/3 text-justify ml-40 ">
            <p className="mb-2 text-[rgb(224,255,255)]  text-[18px] font-bold no-underline hover:underline underline-offset-8">
              UT Tourism Website
            </p>
            <div className="flex flex-col  justify-between m2 text-white leading-7 text-xs/[18px] mt-[-5px]">
              <a href="#">Andaman and Nicobar</a>
              <a href="#">Chandigarh</a>
              <a href="#">Dadra and Nagra Haveli</a>
              <a href="#">Daman and Diu</a>
              <a href="#">Delhi</a>
              <a href="#">Jammu and Kashmir</a>
              <a href="#">Ladakh</a>
              <a href="#">Lakshadweep</a>
              <a href="#">Puducherry</a>
            </div>
          </div>
        </div>

        <div className="">
          <p className="flex justify-center text-5xl">
            Incredible&nbsp;
            <span className="text-[rgb(244,206,101)] text-5xl">I</span>
            ndia
          </p>
        </div>

        {/* ******* */}

        <div className="flex my-4 text-white justify-center  text-center">
          <p className=" mx-4">Privacy Policy</p>
          <p className=" mx-4">Terms Of Platform Use</p>
          <p className=" mx-4">Important Links</p>
          <p>Emergency</p>
        </div>
        <p className=" text-center">
          © Ministry of Tourism, Government of India
        </p>
      </div>
    </>
  );
};

export default Footer;
