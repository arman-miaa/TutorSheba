import { useEffect, useState } from "react";
import axios from "axios";
import FeedbackSwiper from "../swipers/FeedbackSwiper";
import TitleSection from "./TitleSection";

const Feedbacks = () => {
  const [tutorsReviews, setTutorsReviews] = useState([]);
  const [parentsReviews, setParentsReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorsReviews = async () => {
      try {
        const response = await axios.get(
          "https://tutorsheba.onrender.com/tutorsReviews"
        );
        setTutorsReviews(response.data);
      } catch (error) {
        console.error("Error fetching tutors' reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchParentsReviews = async () => {
      try {
        const response = await axios.get(
          "https://tutorsheba.onrender.com/parentsReviews"
        );
        setParentsReviews(response.data);
      } catch (error) {
        console.error("Error fetching parents' reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorsReviews();
    fetchParentsReviews();
  }, []);

  return (
    <div className="container mx-auto">
      <TitleSection
        title="People Love Us!"
        subtitle="We are proud to share the experience of our honorable clients"
      />

      {loading ? (
        <p className="text-center text-xl font-semibold">Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 w-full md:w-1/2 border-2 p-4">
            <h1 className="text-2xl font-bold text-center">
              What our Parents say about us
            </h1>
            <FeedbackSwiper feedbacks={parentsReviews} />
          </div>
          <div className="flex-1 w-full md:w-1/2 border-2 p-4">
            <h1 className="text-2xl font-bold text-center">
              What our Tutors say about us
            </h1>
            <FeedbackSwiper feedbacks={tutorsReviews} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedbacks;
