import React from "react";

import Navbar from "react-bootstrap/Navbar";

export const Footer = () => {
  let footerStyle = {
    //   position: "absolute",
    //   bottom: "0",
    width: "100%",
  };
  return (
    <Navbar fixed="bottom" className="bg-dark text-light text-center py-2 mt-3">
      <p className="text-center" style={footerStyle}>
        Copyright &copy; MyTodosList.com
      </p>
      {/* </footer> */}
    </Navbar>
  );
};
