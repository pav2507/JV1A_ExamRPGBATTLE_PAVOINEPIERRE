// ici se placent toute mes div et toutes mes classes //
lespersos = document.getElementsByClassName('lespersos');

personnage1 = document.getElementById('personnage1');
personnage2 = document.getElementById('personnage2');
personnage3 = document.getElementById('personnage3');
personnage4 = document.getElementById('personnage4');

nomperso1 = document.getElementById('nomperso1');
nomperso2 = document.getElementById('nomperso2');
nomperso3 = document.getElementById('nomperso3');
nomperso4 = document.getElementById('nomperso4');

pvperso1 = document.getElementById('pvperso1');
pvperso2 = document.getElementById('pvperso2');
pvperso3 = document.getElementById('pvperso3');
pvperso4 = document.getElementById('pvperso4');

manaperso1 = document.getElementById('manaperso1');
manaperso2 = document.getElementById('manaperso2');
manaperso3 = document.getElementById('manaperso3');
manaperso4 = document.getElementById('manaperso4');



lesmechants = document.getElementsByClassName('lesmechants');
mechant1 = document.getElementById('mechant1');
mechant2 = document.getElementById('mechant2');
mechant3 = document.getElementById('mechant3');

pvmechant1 = document.getElementById('pvmechant1');
pvmechant2 = document.getElementById('pvmechant2');
pvmechant3 = document.getElementById('pvmechant3');

texte = document.getElementsByClassName('texte');
boutonaction1 = document.getElementById('action1');
boutonaction2 = document.getElementById('action2');
boutonaction3 = document.getElementById('action3');

let tourdesjoueurs = true

let tourDuPersonnageActuel = 0

let enemicible = null

function RandomInt(min, max){
    return (Math.floor(Math.random() * (max-min)) + min);
}
// ici je place la fonction permettant a mes alliés de faire des ations tour a tour //
function Action1(){
    console.log("appuie sur un bouton");
    if (tourdesjoueurs && enemicible){
        console.log(`C'est le joueur ${tourDuPersonnageActuel+1} qui a attaqué un mechant`);
        let pvenemeie = parseInt(document.getElementById(`pvmechant${enemicible}`).innerHTML);
        pvenemeie = pvenemeie - RandomInt (3,10);
        if (pvenemeie<=0){
            document.getElementById(`mechant${enemicible}`).remove();
        }
        document.getElementById(`pvmechant${enemicible}`).innerHTML= pvenemeie;
        tourDuPersonnageActuel += 1 ;
        if (tourDuPersonnageActuel>3){ ;
            tourdesjoueurs = false ;
            tourDuPersonnageActuel = 0 ;
            tourdesenemis() ;
        }
    }
}
// ici la fonction permettant a mes enemis de riposter //
function tourdesenemis(){
    for(let enemi = 0; enemi< 3; enemi++) {
        let joueurcible = RandomInt(0,4)
        let pvjoueur = parseInt(document.getElementById(`pvperso${joueurcible+1}`).innerHTML)
        pvjoueur = pvjoueur -  RandomInt (10,20)
        document.getElementById(`pvperso${joueurcible+1}`).innerHTML = pvjoueur
    }
    tourdesjoueurs = true
}

boutonaction1.onclick = Action1;

mechant1.onclick = function(){
    enemicible = 1
    console.log(enemicible)
}

mechant2.onclick = function(){
    enemicible = 2
    console.log(enemicible)
}

mechant3.onclick = function(){
    enemicible = 3
    console.log(enemicible)
}




