import './SidebarOption.css';

import React, { Component } from 'react'

const SidebarOption = ({ Icon, title }: any) => {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span>{title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption;