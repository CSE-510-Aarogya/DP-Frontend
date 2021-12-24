import { Link, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

class TherapistLogin extends Component {
  constructor(props) {
    super(props);
    this.nameEl = React.createRef();
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  submitHandler(event) {
    event.preventDefault();
    const name = this.nameEl.current.value;
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
        return;
      }

      axios.post('http://18.216.173.124:8081/admin/', {
        "fullname": name,
        "email": email,
        "password": password,
      })
      .then(function (response) {
        console.log("success");
        this.props.history.push("/login")
      })
      .catch(function (error) {
        console.log(error);
      });


    // fetch("https://ancient-harbor-94236.herokuapp.com/admin/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     "fullname": name,
    //     "email": email,
    //     "password": password,
    //   }),
    // }).then((res) => {
    //     console.log("success")
    //   }).catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <div>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign Up</p>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example5"
                      className="form-control form-control-lg"
                      placeholder="Enter you name"
                      ref={this.nameEl}
                    />
                    <label className="form-label" for="form3Example3">
                      Full Name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter email address"
                      ref={this.emailEl}
                    />
                    <label className="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control form-control-lg"
                      placeholder="Enter password"
                      ref={this.passwordEl}
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <div
                      className="btn btn-main btn-round-full"
                      onClick={(e) => {
                        this.submitHandler(e);
                      }}
                    >
                      Sign Up
                    </div>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/login" className="btn btn-main btn-round-full">
                      GoTo Login Page
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
