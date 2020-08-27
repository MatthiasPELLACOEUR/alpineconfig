import React, { useState } from 'react'

const Modeles = (props) => {

    const [legende] = useState({
        price: 58400,
        name: 'Légende'
    })
    const [pure] = useState({
        price: 54700,
        name: 'Pure'
    })

    const getPrice = () => {
        if(document.getElementById('legende').checked === true){
            props.changePrice(legende.price)
            props.chooseModele(legende.name)

        }
        else if(document.getElementById('pure').checked === true){
            props.changePrice(pure.price)
            props.chooseModele(pure.name)
        }
    }


    
    return (
        <div>
            <h3 class="divider" id="start">Etape 1: Modeles</h3>
            <hr class="solid" />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <input
                                type="radio" name="emotion"
                                id="legende" class="input-hidden" value={legende.price}/>

                        <label for="legende">
                            <img
                                    src="../templates_html/img/configurateur/modele/selection/legende.png"
                                    alt="Alpine legende model" />
                            <h4>Legende</h4>
                            <p>{legende.price}€</p>
                        </label>
                    </div>
                    <div class="col-6">
                        <input
                                type="radio" name="emotion"
                                id="pure" class="input-hidden" value={pure.price}/>
                        <label for="pure">
                            <img src="../templates_html/img/configurateur/modele/selection/pure.png"
                                    alt="Alpine pure model" />
                            <h4>Pure</h4>
                            <p className="grossepute">{pure.price}€</p>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a href="#test1" class="btn btn_next" value="blanc" onClick={() => getPrice()}>Next</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modeles