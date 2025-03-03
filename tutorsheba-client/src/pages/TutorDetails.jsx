import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { RiMenuFoldLine } from "react-icons/ri";

const TutorDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState("");

  useEffect(() => {
    axios
      .get(`https://tutorsheba.onrender.com/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="grid grid-cols-12 container mx-auto mt-16">
      <div className="col-span-9 bg-gray-50 p-4 space-y-3">
        <h2 className="text-xl md:text-5xl  font-bold text-center">
          Tutor Needed For {job.Medium}
        </h2>
        <div className=" flex justify-center gap-5 ">
          <span className="">Job ID: {job.jobId}</span>
          <p className=" text-gray-600">Posted at: {job.PostedAt}</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <p className="">
            <FaLocationDot className="text-5xl text-red-600 " />
          </p>
          <p>{job.Location}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <h2 className="">
            Medium: <br />
            <span className="text-gray-600 font-bold text-xl">
              {job.Medium}
            </span>
          </h2>

          <p>
            Class: <br /> <span className="font-black">{job.Class}</span>
          </p>
          <p>
            Student Gender: <br />{" "}
            <span className="font-bold">{job.PreferredTutor}</span>
          </p>
          <p>
            Preferred Tutor: <br />
            <span className="font-bold">{job.PreferredTutor}</span>
          </p>
          <p>
            Tutoring Days: <br />{" "}
            <span className="font-black">{job.TutoringDays}</span>
          </p>
          <p>
            Tutoring Time: <br />{" "}
            <span className="font-black">{job.TutoringTime}</span>
          </p>
          <p>
            Tutoring Duration: <br /> <span className="font-black">N/A</span>
          </p>
          <p>
            No of Student: <br />{" "}
            <span className="font-bold ">{job.NoOfStudent}</span>
          </p>
          <p>
            Subjects: <br />{" "}
            <span className="bg-[#3Ac47D] text-white font-bold py-1 px-4">
              {job.Subject}
            </span>
          </p>

          <p>
            Salary: <br />
            <span className="text-blue-600 font-bold">{job.Salary}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="gap-2 flex items-center">
              <RiMenuFoldLine />
              Other Requirements : <br />
            </h2>
            <h3 className="font-bold text-base md:text-xl ">
              Highly experienced tutors are requested to apply.
            </h3>
          </div>

          <Link to={"/login"} className="px-4 py-1 border border-blue-500">
            Login then apply this job
          </Link>
        </div>
      </div>
      <div className="col-span-3">
        <h2 className="text-3xl font-bold">Tutor Needed For {job.Medium}</h2>
      </div>

      <div className="col-span-9 mt-8">
        <Link
          to={"/tutorJobs"}
          className="px-4 py-1 text-white bg-pink-700 w-full text-center block"
        >
          Go Back to All Jobs
        </Link>
      </div>
    </div>
  );
};

export default TutorDetails;
