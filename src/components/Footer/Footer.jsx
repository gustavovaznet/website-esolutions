//FOOTER

//IMPORTING
import React, { Component } from 'react';
import logo from './logo.png';
import './Footer.css'

//FOOTER
class Footer extends Component {
    render(){
        return (
            <div id="footer_div">
                <div id="footer_column_div">
                    <div className="footer_column">
                        <img src={logo} alt="logo" className="div_heading left footer" />
                        <p className="div_subheading left footer_sub">
                                 CNPJ 88.888.888/0001-88
                            <br/>Av. das Nações, Curitiba-PR
                        </p>
                    </div>

                    <div className="footer_column">
                        <h1 className="div_heading left footer">Links Úteis</h1>
                        <ul>
                            {this.props.footer.links.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer_column">
                        <h1 className="div_heading left footer">Redes Sociais</h1>
                        <ul>
                        {this.props.footer.social.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <p className="div_subheading red">eSolutions LTDA 2022 © Todos os direitos reservados</p>
            </div>
        )
    }
}

export default Footer;
