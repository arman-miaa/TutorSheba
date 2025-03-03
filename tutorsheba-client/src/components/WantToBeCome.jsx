import {Link} from "react-router"

const WantToBeCome = () => {
  return (
    <div className=" container mx-auto mt-20   ">
      <div className="flex justify-center items-center gap-4 bg-base-100 shadow-2xl p-10 mx-24 lg:mx-48">
        <div>
          <h1 className="uppercase text-gray-500">Want to become</h1>
          <h2 className="uppercase text-3xl lg:text-5xl font-extrabold">Tutor</h2>
        </div>
        <div>
          <p>Let’s Work Together <br /> & Explore Opportunities</p>
        </div>
        <div>
          <Link to="/register">
            {" "}
            <button className="btn bg-black text-white font-bold mt-8">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WantToBeCome