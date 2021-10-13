import React, { Fragment } from "react";
// import './App.css';
import AutoCompleteMedicineSearch from "./AutoCompleteMedicineSearch";

class Navbar extends React.Component {

    render() {
        return (    
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="bars" onClick={this.props.onBarClick}></a>
                        <a className="navbar-brand" href="index.html">
                        Medical Store Management System
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <form>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                        <AutoCompleteMedicineSearch/>
                                </li>
                                {/* <li>
                                    <button
                                        style={{
                                            background: "none",
                                            border: "0",
                                            color: "#fff",
                                            marginTop: "13px",
                                        }}
                                    >
                                        <i className="material-icons">search</i>
                                    </button>
                                </li> */}

                            </ul>
                            </form>
                    </div>
                </div>
            </nav>
            
        );
    }
}

export default Navbar;