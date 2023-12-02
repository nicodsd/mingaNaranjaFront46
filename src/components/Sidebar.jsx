import { NavLink } from 'react-router-dom'
import React from 'react'
import { FiX } from "react-icons/fi"
import '../../src/App.css'

export default function Sidebar() {
    const Sidebar = ({ children }) => {
        const menuItem = [
            {
                name: Home
            },
            {
                name: {}
            },
            {
                name: {}
            },
            {
                name: {}
            },
            {
                name: {}
            }
        ]
        return (
                <div className='container'>
                    <div className='sidebar'>
                        <div className='topSection'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                    <div className='btnClose'>
                        <FiX />
                    </div>
                </div>
        )
    }
}

