import React, { FunctionComponent } from 'react';
import './Menu.scss'
export interface MenuProps { }

export const Menu: FunctionComponent<MenuProps> = (props: MenuProps) => {
    return (
        <div className='navbar navbar-expand navbar-dark bg-dark'>
            <a className='navbar-brand' href='/'>
                <i className='fa fa-calendar-check-o'></i>
                        React Todooodle
            </a>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item'><a className='nav-link' href="/todos">Todos</a></li>
                    <li className='nav-item'><a className='nav-link' href="/about">About</a></li>
                </ul>
            </div>
        </div>
    )
}