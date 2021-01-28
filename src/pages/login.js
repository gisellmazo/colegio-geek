import React from "react";
import "../styles/login.css";

import { withRouter } from "react-router-dom";

const login = () => {
    return (
        <body>
            <div id="main-container">
                <div className="imagen">
                    <img src="../images/logo-colegio-geek.png" alt="logo colegio"  width="50%"/>
                </div>
                <br/><br/><br/>
                <div>
                    <form>
                        <div class="row g-3 align-items-center">
                            <label>tipo usuario:</label>
                            <select name="tipo" className="diseno-imputs">
                                <option value="1">Administrador</option>
                                <option value="2">Profesor</option>
                                <option value="3">Estudiante</option>
                            </select>
                            <label class="col-form-label">Usuario:</label>
                            <input type="number"  className="form-control diseno-imputs" />
                            <label for="inputPassword6" className="col-form-label diseno-imputs">Contraseña:</label>
                            <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            <br/>
                            <button type="submit" className="diseno-imputs">Ingresar</button>
                        </div>

                    </form>
                </div>
            </div>
        </body>

    );
};

export default withRouter(login);