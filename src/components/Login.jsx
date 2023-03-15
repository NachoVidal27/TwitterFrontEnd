import { useState } from "react";
import SignUp from "./SignUp";

function Login() {
  return (
    <div>
      <body>
        <div id="bodyBackgroundColor">
          <div class="container">
            <div class="contenedor">
              <div class="row w-100 h-100 g-0" id="contenedor-general-login">
                <div
                  class="col-lg-7 col-md-5 d-none d-md-block p-5"
                  id="parte-azul"
                >
                  <div class="position-relative h-100">
                    <p
                      class="text-light position-absolute bottom-0 start-0 fw-bold"
                      id="texto-azul"
                    >
                      Hey! Nice to see you again 🥰
                    </p>

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png"
                      class="position-absolute top-0 start-0"
                      alt=""
                      id="logo-twitter"
                    />
                  </div>
                </div>

                <div class="col-lg-5 col-md-7 col-sm-12 bg-light d-flex flex-column align-items-center justify-content-center">
                  <div class="" id="contenedor-login">
                    <h3 class="fw-bold">Login</h3>
                    <p>Ready to start using Twitter?</p>
                    <form method="post" action="/auth">
                      <div class="mb-2">
                        <label for="email" class="form-label"></label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>

                      <div class="mb-2">
                        <label for="password" class="form-label"></label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>

                      <button
                        type="submit"
                        class="btn text-light rounded-pill mt-2"
                        id="login-btn"
                      >
                        Login
                      </button>
                    </form>
                    <p class="d-flex justify-content-center mt-5">
                      Dont have an account?
                      <a href="/register" class="text-decoration-none">
                        {" "}
                        Sing Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
