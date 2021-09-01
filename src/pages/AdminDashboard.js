import React from "react";
import Dashboard from "../components/Admin/Dashboard";
import AdminLayout from "../components/Admin/Layout";
import AppButton from "../components/Burron/AppButton";

const AdminDashboard = (props) => {
  return (
    <AdminLayout>
      <div className="flex items-center">
        <p className="heading5 bold flex-1">Courses</p>
        <AppButton
          className="outline"
          onClick={() => props.history.push("/admin/createcourse")}
        >
          Create Course
        </AppButton>
      </div>
      <Dashboard />
    </AdminLayout>
  );
};

export default AdminDashboard;
