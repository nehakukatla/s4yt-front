import React from "react";
import images from "../assets/images";

const Header = (props) => {
  return  <header>
            <div class="col-8 offset-2 col-sm-4 offset-sm-0 col-lg-4 offset-lg-0 logo">
              <img src={ images.logo } alt="Logo S4YT" />
            </div>
            <div class="col-8 offset-2 col-sm-6 offset-sm-0 title-div py-2">
              <h1 class="title">{ props.title }</h1>
            </div>
          </header>;
}

export default Header