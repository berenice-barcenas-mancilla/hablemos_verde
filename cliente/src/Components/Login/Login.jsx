import React from "react"
import './Login.css'
/* import '../../App.css' */

import { Link } from "react-router-dom";

//Importar video
import video from '../../LoginAssets/Video3.mp4'
//Importar imagen
import logo from '../../LoginAssets/logo.png'
//Importar iconos
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
    return (
        <div className="loginPage flex">
            <div className="container flex">
                { <div className="videoDiv">  
                    <video src={video} autoPlay  muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Hablemos Verde</h2>
                        <p>
                            hagamos eco de las soluciones ambientales
                        </p>
                    </div>

                    <div footerDiv flex>
                        <span className="text">¿Aún no tienes una cuenta?</span>
                        <Link to={'/register'}>
                            <button className="btn">Registrate aquí</button>
                        </Link>
                    </div>
                </div> }

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logo" />
                        <h3>¡Bievenido!</h3>
                    </div>

                    <form action="" className="form grid">
                        <span className="showMessage">El estado de inicio de sesión mostrará aquí </span>
                        <div className="inputDiv">
                            <label htmlFor="username">Usuario</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" name="" id="username" placeholder="Ingresa el nombre de usuario" />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Contraseña</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />

                                <input type="password" name="" id="password" placeholder="Ingresa el nombre de usuario" />
                            </div>
                        </div>

                        <button type="submit" className="btn flex">
                            <span> Iniciar Sesión </span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>


                        <span className="forgotPassword">
                            ¿Olvidaste tu contraseña? <a href="">Clic aquí</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login