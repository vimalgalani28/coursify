import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CoursifyContext } from "../../context/CoursifyContext";
import SubmitButton from "../Burron/SubmitButton";
import "./layout.css";

const navigation = [
  {
    text: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    text: "Courses",
    link: "/admin/courses",
  },
];

const AdminLayout = ({ children }) => {
  const { dispatchUser } = useContext(CoursifyContext);
  const handleLogout = async () => {
    const coursify = JSON.parse(localStorage.getItem("coursify"));
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API}/admin/logout`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${coursify.token}`,
      },
    };
    try {
      const res = await axios(options);
      if (res.data.status === 200 || res.data.status === 201) {
        dispatchUser({
          type: "RESET_USER",
        });
        localStorage.removeItem("coursify");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // grab everything we need
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");

    const handleOpen = () => {
      sidebar.classList.toggle("-translate-x-full");
    };

    // add our event listener for the click
    btn.addEventListener("click", handleOpen);
    return () => {
      btn.removeEventListener("click", handleOpen);
    };
  }, []);
  return (
    <div className="relative min-h-screen md:flex">
      <div className="flex justify-between md:hidden mobile-header">
        <Link to="/" className="block p-4 text-white font-bold">
          Better Dev
        </Link>

        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="sidebar w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Link to="/" className="text-white flex items-center space-x-2 px-4">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-2xl font-extrabold">Admin</span>
        </Link>

        <nav>
          {navigation.map((single) => (
            <Link
              key={single.link}
              to={single.link}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              {single.text}
            </Link>
          ))}
          <div className="mt-3">
            <SubmitButton onClick={handleLogout}>Log Out</SubmitButton>
          </div>
        </nav>
      </div>

      <div className="flex-1 p-10">{children}</div>
    </div>
  );
};

export default AdminLayout;
