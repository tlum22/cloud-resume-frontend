import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">SQL</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '80%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Tableau</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '80%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">HTML/CSS</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '50%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Python</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '50%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">AWS</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '40%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">React</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '20%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
