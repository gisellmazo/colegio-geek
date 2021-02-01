import React from "react";
import "../styles/sidebar.css";

function Sidebar(props) {
  const { name1, name2, name3, name4, name5, ruta1, ruta2, ruta4, ruta5 } = props;
  return (
    <div className="sidebar mt-4 ml-4">
      <ul className="list-group list-group-flush  ">
        
        <a href={ruta1} className="list-group-item   h5 font-weight-normal">{name1}</a>
        <a href={ruta2} className="list-group-item h5 actived font-weight-normal">{name2}</a>
        <a href={ruta2} className="list-group-item h5 actived font-weight-normal">{name3}</a>
        <a href={ruta4} className="list-group-item h5 actived font-weight-normal">{name4}</a>
        <a href={ruta5} className="list-group-item h5 actived font-weight-normal">{name5}</a>


        
      </ul>
    </div>
  );
}

export default Sidebar;
