import React from "react"
import './Dashboard.css'

export const Dashboard = () => {
    return (
        <div>
            Dashboard
            <a href="/">Cerrar Sesión</a>

            <div className="dashboard">
                <div className="left">
                    <div className="sidebar">
                        <div className="wrapper">
                            <div className="menu">
                                <img src="https://i.ibb.co/B4Dn7CT/menu.png" alt="Menu" />
                            </div>
                            <div className="items">
                                <img src="https://i.ibb.co/L8D5T60/light.png" alt="Light" />
                                <img src="https://i.ibb.co/zmDbMVZ/diamond.png" alt="Diamond" />
                                <img src="https://i.ibb.co/W5QZ9Fk/envelope.png" alt="Envelope" />
                                <img src="https://i.ibb.co/CnKDBxC/flask.png" alt="Flask" />
                                <img src="https://i.ibb.co/MGs4Fyn/sent-mail.png" alt="Sent Mail" />
                                <img src="https://i.ibb.co/zGtDpcp/map.png" alt="Map" />
                            </div>
                            <div className="profile">
                                <img src="https://www.seekclipart.com/clipng/middle/103-1032140_graphic-transparent-1-vector-flat-small-user-icon.png" alt="Profile" />
                            </div>
                        </div>
                    </div>
                    <div className="navigation">
                        <div className="wrapper2">
                            <div className="abilan">
                                <img src="https://i.ibb.co/HgJrt1p/abilan.png" alt="Abilan" />
                            </div>
                            <button className="compose">Compose Mail
                                <span className="plus">
                                    <img src="https://i.ibb.co/v1HxGWj/add-1.png" alt="Add" />
                                </span>
                            </button>
                            <div className="folders">Folders</div>
                            <div className="folder-icons">
                                <div className="icon1">
                                    <img src="https://i.ibb.co/qdgf3TJ/envelope.png" alt="Mensajes" />
                                </div>
                                <div className="icon-name1">Mensajes
                                    <button className="buton-span"> 20
                                    </button>
                                </div>
                            </div>
                            <div className="folder-icons">
                                <div className="icon1">
                                    <img src="https://i.ibb.co/2yLfX9W/sent-mail.png" alt="Soporte" />
                                </div>
                                <div className="icon-name">Soporte</div>
                            </div>
                            <div className="folder-icons">
                                <div className="icon1">
                                    <img src="https://i.ibb.co/6ZH9kK3/star.png" alt="Importante" />
                                </div>
                                <div className="icon-name">Importante</div>
                            </div>
                            <div className="folder-icons">
                                <div className="icon1">
                                    <img src="https://i.ibb.co/z4QhcbD/email.png" alt="Borradores" />
                                </div>
                                <div className="icon-name">Papelera</div>
                            </div>
                            <div className="folder-icons">
                                <div className="icon1">
                                    <img src="https://i.ibb.co/3MzfGDF/bug.png" alt="Spam" />
                                </div>
                                <div className="icon-name">Spam</div>
                            </div>
                            <div className="folder-icons">
                                <div className="icon1">
                                    <img src="https://i.ibb.co/xfcFLCN/waste-bin.png" alt="Papelera" />
                                </div>
                                <div className="icon-name">Papelera</div>
                            </div>
                            <div className="folders">
En linea                            </div>
                            <div className="folder-icons">
                                <div className="avatar">
                                    <div className="online">
                                    </div>
                                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Don Allen" />
                                </div>
                                <div className="names">Don Allen
                                </div>

                            </div>
                            <div className="folder-icons">
                                <div className="avatar">
                                    <div className="online">
                                    </div>
                                    <img src="https://randomuser.me/api/portraits/women/71.jpg" alt="Aaron Tim" />
                                </div>
                                <div className="names">Aaron Tim</div>
                            </div>
                            <div className="folder-icons">
                                <div className="avatar">
                                    <div className="online red">
                                    </div>
                                    <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Jack Joe" />
                                </div>
                                <div className="names">Jack Joe</div>
                            </div>
                            <div className="folders">
                                Etiquetas
                            </div>
                            <div className="section1">
                                <button className="btn buton1"> Importante
                                    <span className="tag">
                                        <img src="https://i.ibb.co/Zdx3jGx/tag.png" alt="Importante Tag" /></span>
                                </button>

                                <button className="btn buton2"> New
                                    <span className="tag">
                                        <img src="https://i.ibb.co/N1SMfgQ/tag.png" alt="New Tag" /></span>
                                </button>
                            </div>
                            <div className="section2">
                                <button className="btn buton3"> Antiguos
                                    <span className="tag">
                                        <img src="https://i.ibb.co/C5q0MDM/tag.png" alt="Old Tag" /></span>
                                </button>
                                <button className="btn buton4"> Ecologia
                                    <span className="tag">
                                        <img src="https://i.ibb.co/DMmSZW0/tag.png" alt="Priority Tag" /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-header">
                        <div className="top-bar">
                            <div className="top-bar-justify">
                                <div className="big-inbox">
                                Mensajes
                                </div>

                                <div className="top-bar-items">
                                    <div className="notif">
                                        <div className="online pink">
                                        </div>
                                        <img src="https://i.ibb.co/VJm73Hz/notifications-button.png" alt="Notifications" />
                                    </div>
                                    <img src="https://i.ibb.co/vz4HYJb/envelope.png" alt="Envelope" />
                                    <img src="https://i.ibb.co/52Vkq4M/earth-globe.png" alt="Earth Globe" />
                                    <div className="icon-name5"> English </div>
                                </div>
                            </div>
                            <div className="profile2">
                                <img src="https://www.seekclipart.com/clipng/middle/103-1032140_graphic-transparent-1-vector-flat-small-user-icon.png" alt="Profile" />
                                <div className="icon-name5">Larry Nunez</div>
                            </div>
                        </div>
                        <hr className="new-hr" />
                        <div className="right-bottom">
                            <div className="check">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                </label>
                                <div className="down-arrow">
                                    <img src="https://i.ibb.co/WDqrXj6/drop-down-arrow.png" alt="Drop down arrow" />
                                </div>
                            </div>
                            <div className="middle-buttons">
                                <div className="buttons">
                                    <button className="new button">
                                        <img src="https://i.ibb.co/X4j3TZR/reload.png" alt="Reload" />
                                    </button>
                                    <button className="new button">
                                        <img src="https://i.ibb.co/L60Yr87/eye.png" alt="Eye" />
                                    </button>
                                    <button className="new button">
                                        <img src="https://i.ibb.co/Lv6TqBG/waste-bin.png" alt="Waste bin" />
                                    </button>
                                </div>
                                <div className="form has-search">
                                    <input className="text" type="search" placeholder="Search here..." name="search" />
                                    <span className="searchIcon">
                                        <img src="https://i.ibb.co/sqFgRq8/search.png" alt="Search" />
                                    </span>
                                </div>
                            </div>
                            <div className="search-arrow">
                                <img src="https://i.ibb.co/cx2t05H/scroll-arrows.png" alt="Scroll arrows" />
                            </div>
                        </div>
                        <div className="right-body">
                            <div className="scroll-cards">
                                <div className="card">
                                    <div className="mails">
                                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User 1" />
                                        <div className="mail-names">
                                            Louis Adkins
                                        </div>

                                    </div>
                                    <div className="mail-info">
                                        Como hacer un huerto en vertical
                                    </div>
                                    <div className="bottom-info">
                                        <div className="check1">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                            </label>
                                            <div className="star">
                                                <img src="https://i.ibb.co/SN5SJ8x/star.png" alt="Star" />
                                            </div>
                                            <div className="star">
                                                <img src="https://i.ibb.co/FW9tsHK/attachment.png" alt="Attachment" />
                                            </div>
                                        </div>
                                        <div className="date">8:30 AM</div>
                                    </div>
                                </div>
                                {/* Aquí van las demás cartas */}
                            </div>
                            <div className="message">
                                <div className="mes-date">
                                    Dec 1, 2018
                                </div>
                                <div className="title">
                                    Como hacer tu propio huerto en vertical paso a paso
                                    <div className="title-icons">

                                    </div>
                                </div>
                                <div className="from">
                                    <span className="who">From: </span>ashraf@glaze.com
                                </div>
                                <div className="message-from">
                                    Hola!
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas pariatur repellat veritatis atque, tempora quasi quas facere impedit aliquam libero qui iure cumque incidunt facilis soluta necessitatibus laboriosam nemo. Delectus architecto
                                        sed, excepturi natus iste vel quidem officia corrupti repudiandae!</p>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, deleniti eaque eligendi minus maxime tempora eiusi.</p>
                                </div>
                                <div className="attachment-last">
                                    <img src="https://i.ibb.co/FW9tsHK/attachment.png" alt="Attachment" />
                                    <div className="att-write">
                                        Attachment (80MB)
                                        <div>
                                            <button className="btn1 buton0"> Ver más
                                                <span className="tag"></span>
                                            </button>
                                            <button className="btn1 buton9"> Descargar
                                            </button>
                                            <div className="son-images">
                                                <div className="inside-img">
                                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Image 1" />
                                                    <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Image 2" />
                                                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Image 3" />
                                                    <img src="https://images.unsplash.com/photo-1450609283058-0ec52fa7eac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Image 4" />
                                                </div>
                                                <button className="son-buton"> 20+
                                                </button>
                                            </div>
                                            <button className="btn2 butona"> Compartir
                                                <span className="tag">
                                                    <img src="https://i.ibb.co/GQf8frw/reply.png" alt="Reply" />
                                                </span>
                                            </button>
                                            <button className="btn2 butonb"> Enviar
                                                <span className="tag">
                                                    <img src="https://i.ibb.co/6W40kTg/forward-arrow.png" alt="Forward" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Dashboard;