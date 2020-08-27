import React from 'react'

const Couleurs = () => {
    return(
        <div>

        <h3 class="divider" id="etape2">Etape 2: Couleurs</h3>
            <hr class="solid" />
            <section class="container-fluid border_choices">
                <div class="row">
                    <div class="col-4">
                        <div class="card color-card">
                            <input
                                    type="radio" name="blanc"
                                    id="blanc" class="input-hidden colors" value="blanc"/>
                            <label for="blanc">
                                <img
                                        src="../templates_html/img/configurateur/couleurs/selection/blanc.jpg"
                                        alt="couleur blanche" />
                            </label>
                            <div class="card-body">
                                <h5 class="card-title">Blanc Glacier</h5>
                                <p class="card-text">0€</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-4">
                        <div class="card color-card">
                            <input
                                    type="radio" name="bleu"
                                    id="bleu" class="input-hidden colors" value="bleu"/>
                            <label for="bleu">
                                <img
                                        src="../templates_html/img/configurateur/couleurs/selection/bleu.jpg"
                                        alt="couleur bleu" />

                            </label>
                            <div class="card-body">
                                <h5 class="card-title">Bleu Alpine</h5>
                                <p class="card-text">1800€</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card color-card">
                            <input
                                    type="radio" name="noir"
                                    id="noir" class="input-hidden colors" value="noir" />
                            <label for="noir">
                                <img
                                        src="../templates_html/img/configurateur/couleurs/selection/noir.jpg"
                                        alt="noir" />
                            </label>
                            <div class="card-body">
                                <h5 class="card-title">Noir Profond</h5>
                                <p class="card-text">840€</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Couleurs