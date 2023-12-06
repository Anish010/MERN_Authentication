import React from "react";
import { Redirect, Route , Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = ({ element: Element, ...rest }) => {
  let auth = localStorage.getItem("authToken");
  // return (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       localStorage.getItem("authToken") ? (
  //         <Element {...props} />
  //       ) : (
  //         <Navigate to="/login" />
  //       )
  //     }
  //   />
  // );
  return (
    auth? <Outlet /> : <Navigate to="/login" />
  )
};

export default PrivateRoutes;
