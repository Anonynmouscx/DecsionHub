import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div classname='wrapper'>
      <div className="parent">
        <div className="card">
          <div className="glass"></div>
          <div className="content">
            <span className="title">DECISION HUB</span>
            <span className="text">
              Welcome! Dive into efficiency with Rule Builder, Rule Management, and Debugging. Simplify data input with 'Add File' and make informed decisions using our Decision Making tool.
            </span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <Link to="/rule-builder" className="social-button social-button1">
                <button >
                  Rule Builder
                </button>
              </Link>

              <Link to="/rule-management" className="social-button social-button2">
                <button >
                  Rule Management
                </button>
              </Link>

              <Link to="/debugging" className="social-button social-button3">
                <button >
                  Debugging
                </button>
              </Link>



              <Link to="/add-file" className="social-button social-button4" >
                <button >
                  Add File
                </button>
              </Link>


              <Link to="/decision-making" className="social-button social-button5" >
                <button >
                  Decision Making
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;