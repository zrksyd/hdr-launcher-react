import * as React from 'react';
import * as Messages from "../messages";
import { Backend } from "../backend";
import { LogWindow } from './log_window';

/**
 * main menu implementation
 */
export class MainMenu {
    backend: Backend;

    constructor(backend: Backend) {
        this.backend = backend;
    }

    render() {
        return (
        <div className="main-menu">
                <div className="left-side">
                        <h1 className="header">HDR Launcher</h1>
                        <button className="main-buttons" onClick={() => this.backend.play()}>
                                <div>Play&nbsp;&nbsp;</div>
                        </button>
                        <button className="main-buttons" onClick={() => this.backend.ping("update ping test")}>
                                <div>Update&nbsp;&nbsp;</div>
                        </button>
                        <button className="main-buttons" onClick={() => this.backend.quit()}>
                                <div>Exit&nbsp;&nbsp;</div>
                        </button>
                </div>    
                <div className="right-side">
                        {/*<LogWindow/>*/}
                </div>
        </div>
        );
    }
}
