import React from "react";

function Navbar() {
  return (
    <div>
      <div
        id="navbar"
        class="d-flex flex-column justify-content-between position-fixed"
      >
        <div>
          <img src="/img/logopajarito.svg" class="logosHome" alt="" />
          <a href="/home">
            <img src="/img/twtHome.svg" class="logosHome" alt="" />
          </a>
          <a href="/user/<%= user._id %>">
            <img src="/img/twtUser.svg" class="logosHome" alt="" />
          </a>
          <a href="/home">
            <img src="/img/writeTwt.svg" class="logosHome" alt="" />
          </a>
        </div>

        <a href="/auth/logout">
          <img src="/img/logout.svg" class="logosHome" id="logout" alt="" />
        </a>
      </div>
      ;
    </div>
  );
}

export default Navbar;
