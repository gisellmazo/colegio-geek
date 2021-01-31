import React from 'react';


function Card(props) {
    const { name, ruta } = props;
    return (
        
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    <a href={ruta}>
                        <button type="button" class="btn-p btn-primary">
                            Ir
                        </button>
                    </a>

                </div>
            </div>
        

    );
}

export default Card;