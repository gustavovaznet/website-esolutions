//PROGRAMS

//IMPORTING
import React, { Component } from 'react';
import "./Programs.css"

class Programs extends Component {
    render() {
        //RETURN
        return (
            <div id="programs_div">
                <h1 className="div_heading light">Nossas Soluções</h1>
                <p className="div_subheading light">Desenvolvemos softwares e aplicativos além de de soluções em nuvem.</p>
                <div id="programs_list_div">
                    {this.props.programs.map((item, i) => {
                        return (
                            <div key={i} className="programs_item_div">
                                <img src={item.image} alt={item.heading} />
                                <h1 className="div_heading light">{item.heading}</h1>
                                <p className="div_subheading light left">{item.paragraph}</p>
                                <a className="button" href={item.href}>Conheça</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Programs;
