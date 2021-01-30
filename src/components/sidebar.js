import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar mt-4 ml-4">
      <ul className="list-group list-group-flush  ">
        
        <a href="/Profesor" className="list-group-item   h5 font-weight-normal">Profesores</a>
        <a href="/" className="list-group-item h5 actived font-weight-normal">Notas</a>
        
      </ul>
    </div>
  );
}

export default Sidebar;
