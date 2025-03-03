
import calculateImg from "../assets/calculateImg.png"
import arrowIcon from "../assets/arrowIcon.svg"
import man from "../assets/man.webp"
import message from "../assets/message.webp";
import result from "../assets/result.webp"

const StudentProcess = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-[36px] font-bold text-center">
        Here's how it works for{" "}
        <span className="text-[#800080]">Students/Guardians</span>
      </h1>
      <div>
        <div className="flex  bg-base-200 gap-4 w-fit p-6 rounded-xl shadow-xl mt-12">
          <img src={calculateImg} className="w-20 h-20" alt="" />
          <div>
            <h4 className="text-xl">
              Search for Tutors or Post your tuition requirements
            </h4>
            <p>Post Tution by creating Account or without Account.</p>
          </div>
        </div>
        <img src={arrowIcon} className="ml-16" alt="" />
        <div className="flex  bg-base-200 gap-4 w-fit  ml-46 -mt-16 p-6 rounded-xl shadow-xl">
          <img src={man} className="w-20 h-20" alt="" />
          <div>
            <h4 className="text-xl">Get one to one demo session for free</h4>
            <p>
              Get free one day demo session with the tutor at your preferred
              location..
            </p>
          </div>
        </div>
        <img src={arrowIcon} className="ml-66" alt="" />
        <div className="flex  bg-base-200 gap-4 w-fit p-6 rounded-xl shadow-xl ml-96 -mt-16">
          <img src={message} className="w-20 h-20" alt="" />
          <div>
            <h4 className="text-xl">Hire your tutor</h4>
            <p>If you like the demo session, confirm the teacher.</p>
          </div>
        </div>
        <img src={arrowIcon} className="ml-110" alt="" />
        <div className="flex  bg-base-200 gap-4 w-fit ml-140 -mt-16 p-6 rounded-xl shadow-xl">
          <img src={result} className="w-20 h-20" alt="" />
          <div>
            <h4 className="text-xl">Get results</h4>
            <p>
              Gain knowledge, boost confidence and improve overall academic
              performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProcess