import React from "react";
import ServiceContext from "../service-context";

const RestoService = () => (Wrapped) => {
  return (props) => {
    return (
      <ServiceContext.Consumer>
        {(RestoService) => {
          return <Wrapped {...props} RestoService={RestoService} />;
        }}
      </ServiceContext.Consumer>
    );
  };
};

export default RestoService;
