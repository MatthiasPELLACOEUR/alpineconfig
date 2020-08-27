import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="img-home">
                <img src="../templates_html/img/sources-homepage/logo/logo-white.png" alt="" />
            </nav>
                <img width="100%" height="auto" src="../templates_html/img/sources-homepage/galerie/A110_LEGENDE_5.jpg" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div  class="txt_header" >
                            <h2 class="txt">Configurateur modele A110</h2>
                            <p class="txt">Configurez votre Alpine selon vos preferences
                                en sélectionnant parmi l'ensemble des couleurs, equipements et accessoires proposes.</p>
                        </div>
                        <div class="buttons">
                            <div class="container">
                                <a href="#start" class="btn effect01" value="blanc">
                                    <span>Start</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Header