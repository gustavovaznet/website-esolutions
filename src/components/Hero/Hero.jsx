//HERO

//IMPORTING
import React, { Component } from 'react';
import Nav from '../Nav';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div id="hero_div">
                <Nav navItems={this.props.navItems}/>
                <div id="hero_text_div">
                    <h1>Soluções em Tecnologia da Informação</h1>
                    <p>Nós desenvolvemos soluções em TI para gerar vantagem competitiva no seu negócio!</p>
                </div>
                <div id="buttons_div">
                    <a href="#showcase_div" className="button button_main">Saiba mais</a>
                    <a href="#programs_div" className="button">Nossas soluções</a>
                </div>
            </div>
        )
    }
}

export default Hero;
