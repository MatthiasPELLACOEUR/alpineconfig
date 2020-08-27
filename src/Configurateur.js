import React, { useState } from 'react'
import Modeles from './Etapes/Modeles'
import Couleurs from './Etapes/Couleurs'

const Configurateur = (props) => {

    const [price, setPrice] = useState(0)

    
    return(
        <main className='container-fluid'>
            <div className="row">
                <div className="col-9 test345">
                    <Modeles changePrice={setPrice} chooseModele={props.setModele}/>

                    <Couleurs />

                </div>
                <div className="footer">
                    VOTRE CONFIGURATION : {price} €
                </div>
            </div>
        </main>
    )
}

export default Configurateur