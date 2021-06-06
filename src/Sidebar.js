import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div class="sidebar__recentItem">
            <span className="sidebar__hash" >#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
                <div className="sidebar__top">
                    <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt=""/>
                    <Avatar className="sidebar__avatar"/>
                    <h2>SomeName SomeLastname</h2>
                    <h4>SomeGmailAdress@gmail.com</h4>
                </div>
                <div class="sidebar__stats">
                        <div class="sidebar__stat">
                            <p>Who vieved you</p>
                            <p className="sidebar__statNumber">2,543</p>
                </div>
                <div class="sidebar__stat">
                            <p>Who vieved you</p>
                            <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div class="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("nextjs")}
                {recentItem("mongodb")}
                {recentItem("upwork")}
            </div>
        </div>
    )
}

export default Sidebar
