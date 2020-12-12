import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./style.css";

class BootstrapBreadCrumb extends React.Component{
  render(){
    
  return(
    
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">About</Breadcrumb.Item>
        <Breadcrumb.Item href="">Projects</Breadcrumb.Item>
        <Breadcrumb.Item href="">Contact</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
export default BootstrapBreadCrumb;