import React from 'react'
import { FaCheevronDown, FaInbox, FaRegCalenderAlt, FaRegCalender} from 'react-icons/fa';

export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span> 
                        <FaInbox />
                    </span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span> 
                        <FaRegCalender />
                    </span>
                    <span>Today</span>
                </li>
                <li>
                    <span> 
                        <FaRegCalender />
                    </span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span>
                    <FaCheevronDown />
                </span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">
                Projects will be here
            </ul>
            Add project Component here!
        </div>
    )
}
