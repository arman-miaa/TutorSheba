import { useEffect, useState } from "react";

import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";

const TutionJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState("");
console.log(jobs);
  useEffect(() => {
    axios
      .get("https://tutorsheba.onrender.com/jobs")
      .then((data) => {
        setJobs(data.data);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  // Filter jobs based on search term
  const filteredJobs = jobs
    .filter((job) => {
      return job.jobId.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstJob, indexOfLastJob); // Only show filtered jobs on current page

  // handle search of job id
  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  // handle search of date
  const handleDateSearch = (date) => {
    setSearchDate(date);
  };

  return (
    <div className="flex">
      <Sidebar onSearch={handleSearch} onDateSearch={handleDateSearch} />
      {/* Passing the search handler */}
      <div className="p-5 w-full">
        <div className="flex justify-between items-center mb-4">
          <p>
            Showing {indexOfFirstJob + 1}-
            {Math.min(indexOfLastJob, jobs.length)} of {filteredJobs.length}
            jobs
          </p>
          <select
            value={jobsPerPage}
            onChange={(e) => {
              setJobsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border p-2"
          >
            <option value="5"> 5</option>
            <option value="10"> 10</option>
            <option value="15"> 15</option>
            <option value="20"> 20</option>
          </select>
        </div>

        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-5 rounded-lg shadow-lg border border-gray-200 mb-5"
          >
            <h2 className="flex items-center gap-2">
              <FaLocationDot /> {job.Location}
            </h2>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Tutor Needed For {job.Medium}
              </h2>
              <span className="text-blue-500 border-blue-500 border px-3 py-1">
                Job ID: {job.jobId}
              </span>
            </div>
            <div className="flex gap-5">
              <h2 className="flex items-center gap-2 bg-[#a137a1] p-2 text-white font-bold rounded-lg">
                <IoHome /> {job.Tutoring}
              </h2>
              <h2 className="text-white font-bold p-2 rounded-lg bg-[#1089AD]">
                {job.PostedAt}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              <h2 className="font-semibold text-xl">
                Medium: <br />
                <span className="text-gray-600 font-bold text-xl">
                  {job.Medium}
                </span>
              </h2>
              <p>
                Class: <br /> <span className="font-black">{job.Class}</span>
              </p>
              <p>
                Preferred Tutor: <br />{" "}
                <span className="font-bold">{job.PreferredTutor}</span>
              </p>
              <p>
                Tutoring Days: <br />{" "}
                <span className="font-black">{job.TutoringDays}</span>
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
              <p className="mt-3 text-gray-600">Posted at: {job.PostedAt}</p>
              <Link
                to={`/tutor-details/${job._id}`}
                className="mt-4 bg-purple-600 cursor-pointer text-white px-4 py-2 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutionJobs;
