import React from "react";
import "../styles/sidebar.css";

function Sidebar(props) {

  const { name1, name2, name3, name4, name5, name6, ruta1, ruta2, ruta3, ruta4, ruta5, ruta6 } = props;

  return (
    <div className="sidebar mt-4 ml-4">
      <ul className="list-group list-group-flush  ">
        
        <a href={ruta1} className="list-group-item h5 actived font-weight-normal">{name1}</a>
        <a href={ruta2} className="list-group-item h5 actived font-weight-normal">{name2}</a>
        <a href={ruta3} className="list-group-item h5 actived font-weight-normal">{name3}</a>
        <a href={ruta4} className="list-group-item h5 actived font-weight-normal">{name4}</a>
        <a href={ruta5} className="list-group-item h5 actived font-weight-normal">{name5}</a>
        <a href={ruta6} className="list-group-item h5 actived font-weight-normal">{name6}</a>

        
      </ul>
    </div>
  );
}

export default Sidebar;
