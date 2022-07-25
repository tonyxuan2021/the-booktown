import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setFailedAuth(true);
    }
  });

  if (failedAuth) {
    return (
      <div>
        <p>You must be logged in</p>
        <Link to="/signin">Login</Link>
      </div>
    );
  }

  return <div>You are logged in, here is your secret info</div>;
};

export default Dashboard;
