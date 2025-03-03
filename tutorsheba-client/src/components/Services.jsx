import ServicesSwiper from "../swipers/ServicesSwiper";
import TitleSection from "./TitleSection"


const Services = () => {
  return (
    <div className="container mx-auto">
      <TitleSection
        title={`Our Services`}
        subtitle={`Here are services we provide`}
      />
      <div className="w-full flex justify-end">
        {" "}
        <button className="px-2 button mt-auto cursor-pointer py-1 block text-center text-white  rounded border border-[rgba(0,0,0,0.1)] bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890]">
          View More
        </button>
      </div>
      <ServicesSwiper />
    </div>
  );
}

export default Services