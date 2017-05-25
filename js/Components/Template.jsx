import React from 'react'
import {Link, IndexLink} from 'react-router';

class Template extends React.Component {
  render() {
    return  <div className="container">
    <div className="vertical-center">
<div className="row">
  <div className="col-sm-3">
    <div className="sidebar-nav">
      <div className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <span className="visible-xs navbar-brand">Sidebar menu</span>
        </div>
        <nav className="navbar-collapse collapse sidebar-navbar-collapse">
          <ul className="nav navbar-nav text-center">
            <li className="active"><Link to="#">About Me</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Work Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/additional-info">Additional Info</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="col-sm-6 pre-scrollable panel panel-default informations">
    {this.props.children}
  </div>
  <div className="col-sm-3 pic">
  obrazek
  </div>
</div>
</div>
</div>
  }
}

export default Template
