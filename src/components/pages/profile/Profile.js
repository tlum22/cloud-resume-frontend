import React, { Component } from "react";
import ImgProfile from "../../images/person1.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
          <img
            className="circle responsive-img"
            src={ImgProfile}
            alt="Joh Doe"
          />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
          <div className="card-content center social">
            <h2 className="grey-text text-lighten-3">
              <strong>Tyler Lum</strong>
            </h2>
            <h5 className="grey-text text-lighten-1">
              Information Systems and Business Analytics Student at Loyola Marymount University
            </h5>
            <a href="https://www.linkedin.com/in/tylerhlum/" target="blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/tlum22/?tab=repositories" target="blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
            <a href="./blog.html" target="blank" >
                    <i className="fas fa-blog fa-3x"></i>
            </a>
          </div>
        </div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># PROFILE</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              My name is Tyler Lum and I am an Information Systems and Business Analytics senior at Loyola Marymount University.
              I expect to graduate May 2022.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
