import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class Stats extends Component {
    render() {
        return (
            <div>
                <h2>STATS</h2>
                <p>
                Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        );
    }
}

class Camera extends Component {
    render() {
        return (
            <div>
                <h2>CAMERA</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
            </div>
        );
    }
}

class Help extends Component {
    render() {
        return (
            <div>
                <h2>HELP</h2>
                <p>
                The easiest thing to do is post on
                our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
        );
    }
}

class Navbar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header"> 
                        <li><NavLink exact to="/stats"><i class="fas fa-chart-line"></i></NavLink></li>
                        <li><NavLink to="/camera"><i class="fas fa-camera"></i></NavLink></li>
                        <li><NavLink to="/help"><i class="fas fa-question-circle"></i></NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/stats" component={Stats}/>
                        <Route path="/camera" component={Camera}/>
                        <Route path="/help" component={Help}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}


export default Navbar;