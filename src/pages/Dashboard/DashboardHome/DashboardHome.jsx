import React from "react";
import useRole from "../../../hooks/useRole";
import UserDashboardHome from "./UserDashboardHome";
import RiderDashboardHome from "./RiderDashboardHome";
import AdminDashboardHome from "./AdminDashboardHome";



const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  if (role === "admin") {
    return <AdminDashboardHome></AdminDashboardHome>;
  } else if (role === "rider") {
    return <RiderDashboardHome></RiderDashboardHome>;
  } else {
    return <UserDashboardHome></UserDashboardHome>;
  }
};

export default DashboardHome;
