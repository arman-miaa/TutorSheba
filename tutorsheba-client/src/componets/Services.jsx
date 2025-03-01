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
        <button className="text-right btn btn-primary">See More</button>
          </div>
          <ServicesSwiper/>
    </div>
  );
}

export default Services