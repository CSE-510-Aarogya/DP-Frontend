import { Link, BrowserRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { elementAcceptingRef } from "@mui/utils";
import { render } from "@testing-library/react";

class TherapistLogin extends Component {
  constructor(props) {
    super(props);
    this.nameEl = React.createRef();
    this.passwordEl = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  submitHandler(event) {
    event.preventDefault();
    const name = this.nameEl.current.value;
    const password = this.passwordEl.current.value;

    if (name.trim().length === 0 || password.trim().length === 0) {
        return;
      }
      
      axios.post('http://18.216.173.124:8081/admin/login/', {
        "username": name,
        "password": password,
      })
      .then(function (response) {
        
        console.log(response.data);
        if(response.data == "Incorrect email or password")
        {
          alertify.alert('Unauthorized','Incorrect Email/Password');
        }
        else{
        sessionStorage.setItem("email", name);
        sessionStorage.setItem("access_token", response.data.access_token);
        let storage_event = new Event("storage_event");
        window.dispatchEvent(storage_event)
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    renderRedirect() {
      let email = sessionStorage.getItem("email")
      if (email) {
        return <Redirect to = "/uploadTranscript"/>
      }
    }
  render() {
    return (
      <div>
        <section class="vh-100">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                  class="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-normal mb-0 me-3">Sign in</p>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control form-control-lg"
                      placeholder="Enter email address"
                      ref={this.nameEl}
                    />
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control form-control-lg"
                      placeholder="Enter password"
                      ref={this.passwordEl}
                    />
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label class="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" class="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2" onClick={(e) => { this.submitHandler(e); }}>
                  {sessionStorage.getItem("email") != "" ? this.renderRedirect(): ""}
                    <label class="btn btn-main btn-round-full" > Login </label>
                  </div>
                  <div class="text-center text-lg-start mt-4 pt-2">
                    <Link
                      to="/signup"
                      class="btn btn-main btn-round-full"
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default TherapistLogin;
