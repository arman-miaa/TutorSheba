import TitleSection from "./TitleSection"

import TuitionTypesImg1 from '../assets/TuitionTypesImg1.svg';
import TuitionTypesImg2 from '../assets/TuitionTypesImg2.svg';
import TuitionTypesImg3 from '../assets/TuitionTypesImg3.svg';


const TuitionTypes = () => {
  return (
    <div className="container mx-auto mt-6">
      <TitleSection
        title={`Tuition Types`}
        subtitle={`Find the Best Tuition Type which suits you most`}
      />
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-base-200  shadow-xl transform transition-all duration-300 hover:translate-y-[-8px]">
          <figure className="px-10 pt-10">
            <img src={TuitionTypesImg1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Home Tutoring</h2>
            <p className="text-gray-400 text-lg">
              Looking for one-to-one classes?
            </p>
            <p className="text-xl">
              It’s a unique opportunity to learn in the home with your expected
              future in different categories everything is in favor of your need
            </p>
          </div>
        </div>
        <div className="card bg-base-200  shadow-xl transform transition-all duration-300 hover:translate-y-[-8px]">
          <figure className="px-10 pt-10">
            <img src={TuitionTypesImg2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Online Tutoring</h2>
            <p className="text-gray-400 text-lg">
              Are you left with any doubts?
            </p>
            <p className="text-xl">
              Connect with the best tutors from anywhere and take online classes
              by using different tools Make your life more easier with this
              process.
            </p>
          </div>
        </div>
        <div className="card bg-base-200  shadow-xl transform transition-all duration-300 hover:translate-y-[-8px]">
          <figure className="px-10 pt-10">
            <img src={TuitionTypesImg3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Group Tutoring</h2>
            <p className="text-gray-400 text-lg">
              Need the Compititive & Effordable experience?
            </p>
            <p className="text-xl">
              A group of students can full fill their hunger for learning within
              more affordable tuition fees. Get the opportunity of learning with
              knowledge sharing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TuitionTypes