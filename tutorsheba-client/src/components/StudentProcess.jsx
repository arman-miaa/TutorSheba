import TitleSection from "./TitleSection"
import calculateImg from "../assets/calculateImg.png"
import arrowIcon from "../assets/arrowIcon.svg"

const StudentProcess = () => {
  return (
    <div className="container mx-auto">
      <TitleSection title={`Here's how it works for Students/Guardians`} />
      <div>
        <div className="flex  bg-base-300 gap-4 w-fit p-4">
          <img src={calculateImg} className="w-20 h-20" alt="" />
          <div>
            <h4>Search for Tutors or Post your tuition requirements</h4>
            <p>Post Tution by creating Account or without Account.</p>
          </div>
              </div>
              <img src={arrowIcon} className="ml-16" alt="" />
        <div className="flex  bg-base-300 gap-4 w-fit p-4 ml-46 -mt-16">
          <img src={calculateImg} className="w-20 h-20" alt="" />
          <div>
            <h4>Search for Tutors or Post your tuition requirements</h4>
            <p>Post Tution by creating Account or without Account.</p>
          </div>
              </div>
              <img src={arrowIcon} className="ml-66" alt="" />
        <div className="flex  bg-base-300 gap-4 w-fit p-4 ml-96 -mt-16">
          <img src={calculateImg} className="w-20 h-20" alt="" />
          <div>
            <h4>Search for Tutors or Post your tuition requirements</h4>
            <p>Post Tution by creating Account or without Account.</p>
          </div>
              </div>
              <img src={arrowIcon} className="ml-110" alt="" />
        <div className="flex  bg-base-300 gap-4 w-fit ml-140 -mt-16 p-4">
          <img src={calculateImg} className="w-20 h-20" alt="" />
          <div>
            <h4>Search for Tutors or Post your tuition requirements</h4>
            <p>Post Tution by creating Account or without Account.</p>
          </div>
              </div>
          
      </div>
    </div>
  );
}

export default StudentProcess