import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0 hide-on-med-and-down pt">
          <div className="card-content social">
            <div className="container-fluid">
              <div className="row">
                <h2 className="grey-text text-darken-3">
                  <strong>Tyler Lum</strong>
                </h2>
              </div>
              <div className="row">
                <h5 className="grey-text text-darken-1">Information Systems and Business Analytics Student at Loyola Marymount University</h5>
              </div>
              <div className="row">
                <div className="col">
                  <a href="https://www.linkedin.com/in/tylerhlum" target="blank">
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                  <p className="text-center">LinkedIn</p>
                </div>
                <div className="col">
                  <a href="https://github.com/tlum22/?tab=repositories" target="blank">
                    <i className="fab fa-github-square fa-3x"></i>
                  </a>
                  <p>GitHub</p>
                </div>
                <div className="col">
                  <a href="./blog.html" target="blank">
                    <i className="fas fa-blog fa-3x"></i>
                  </a>
                  <p>Blog Post</p>
                </div>
              </div>

              

              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
