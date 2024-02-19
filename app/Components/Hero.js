import Image from "next/image";
import styles from "../styles";
import { discount, robot } from "@/public";
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span>
            <span className="text-gray-400"> Discount For{" "}</span>
            <span className="text-white"> 1 Month</span>
            <span className="text-gray-400"> Account</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="sm:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-400`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[2] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[3] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[1] w-[50%] h-[50%] right-35 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`md:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;