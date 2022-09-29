import React, { useEffect } from "react";
import Auth from "../../utils/auth";
import "./Logout.css";
const Logout = () => {
  useEffect(() => {
    setTimeout(() => {
      Auth.logout();
    }, 3000);
  });
  return (
    <section>
      <h2>Your secret is safe with us ...</h2>
      <h4>Thank you for using Skeleton Key.</h4>
    </section>
  );
};

export default Logout;
