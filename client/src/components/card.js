import React from 'react';


function Card(props) {
    const { name, ruta } = props;
    return (
        
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    <a href={ruta}>
                        <button type="button" className="btn-p btn-primary">
                            Ir
                        </button>
                    </a>

                </div>
            </div>
        

    );
}

export default Card;