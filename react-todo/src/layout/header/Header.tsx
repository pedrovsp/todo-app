import React, { FunctionComponent } from 'react';
export interface HeaderProps {
    name: string;
    small: string;
}

export const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className="page-header">
            <h2>{props.name} <small>{props.small}</small></h2>
        </header>
    )
}