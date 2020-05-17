import React, { FunctionComponent } from 'react';
import { Header } from '../layout/header/Header';
export interface AboutProps { }

export const About: FunctionComponent<AboutProps> = (props: AboutProps) => {
    return (
        <div>
            <Header name="About" small="us"></Header>
            <h2>Ou history</h2>
            <p>Lore ipsum dolor...</p>
            <h2>Mission</h2>
            <p>Lore pisum amet</p>
            <h2>Press</h2>
            <p>Lorem ipsum dolor amet ...</p>
        </div>
    )
} 