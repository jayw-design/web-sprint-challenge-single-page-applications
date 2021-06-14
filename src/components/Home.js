import React from "react";
import { Link } from "react-router-dom";
import * as style from "./StyledComponents";

const Home = () => {
  return (
    <div>
      <style.Container>
        <div>
        <style.Nav>
            <style.Logo textColor="white">Lambda Eats</style.Logo>        
          <style.NavLinks>
            <style.NavItems>
              <style.NavAnchor href="#">Home</style.NavAnchor>
            </style.NavItems>
            <style.NavItems>
              <style.NavAnchor href="#">About</style.NavAnchor>
            </style.NavItems>
          </style.NavLinks>
        </style.Nav>

        <Link to="/pizza">
          <style.OrderButton>Order</style.OrderButton>
        </Link>
        </div>
      </style.Container>
    </div>
  );
};

export default Home;