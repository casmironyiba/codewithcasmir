import React from "react";
import SigninLink from "@/ui/components/links/signinLink/SigninLink";

React
const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <SigninLink />
    </div>
  );
};

export default Unauthorized;
