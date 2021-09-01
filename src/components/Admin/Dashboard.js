import React, { useContext } from "react";
import { CoursifyContext } from "../../context/CoursifyContext";
import Card from "../Card/Card";

const Dashboard = () => {
  const { courses } = useContext(CoursifyContext);
  return (
    <div className="grid md:grid-cols-4 xs:grid-cols-2 gap-x-2 mt-5 gap-y-3">
      {courses.map((course) => {
        return <Card course={course} key={course._id} shoverClass="none" />;
      })}
    </div>
  );
};

export default Dashboard;
