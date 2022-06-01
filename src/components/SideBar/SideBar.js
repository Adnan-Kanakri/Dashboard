import React from 'react'
import styled from "./SideBar.module.css"
import {TbDashboard} from "react-icons/tb"; 
import {FiUsers} from "react-icons/fi";
import {FaChalkboardTeacher} from "react-icons/fa";
import { Link } from 'react-router-dom'; 
import {MdOutlineSubject,MdOutlineFeedback} from "react-icons/md";

const Sidebar = () => {
    let classes = [];
    let [selected, serSelected] = React.useState(true);
    if (selected) {
        classes = [styled.Link, styled.selected];
    } else {
        classes = [styled.Link];
    }
    return (
        <div className={styled.sideBar}>
            <div className={styled.main}>
                <div className={styled.logo}>
                    <h3>Logo</h3>
                </div>

                <div className={styled.flexChildren}>
                    <div className={styled.divIcon}>
                        <TbDashboard />
                    </div>
                    <Link onClick={() => serSelected(true)} className={classes.join(" ")} to="/dashBoard">Dashboard</Link>
                    {
                        selected ? <div className={styled.active}></div> : null
                    }
                </div>

                <div className={styled.middle}>
                </div>
                <div className={styled.flexChildren}>
                    <div className={styled.divIcon}>
                        <FiUsers />
                    </div>
                    <Link onClick={() => serSelected(false)} className={styled.Link} to="/users">Users</Link>
                </div>
                <div className={styled.middle}>
                </div>
                <div className={styled.flexChildren}>
                    <div className={styled.divIcon}>
                        <MdOutlineSubject />
                    </div>
                    <Link onClick={() => serSelected(false)} className={styled.Link} to="/subject">Subjected</Link>
                </div>
                <div className={styled.middle}>
                </div>
                <div className={styled.flexChildren}>
                    <div className={styled.divIcon}>
                        <FaChalkboardTeacher />
                    </div>
                    <Link onClick={() => serSelected(false)} className={styled.Link} to="/teachers">Teachers</Link>
                </div>
                <div className={styled.middle}>
                </div>
                <div className={styled.flexChildren}>
                    <div className={styled.divIcon}>
                        <MdOutlineFeedback />
                    </div>
                    <Link onClick={() => serSelected(false)} className={styled.Link} to="/feed-back">FeedBack</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar