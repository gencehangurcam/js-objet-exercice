// //1
// // let magasin = {
// //     pomme: 1.50,
// //     ananas: 2.00,
// //     chocolat: 2.00,
// //     pain: 1.00,
// // };

// // console.log(magasin);
// // let ayhan = {
// //     argent: 30.00
// // }
// // // let argent = 30.00;

// // let ask;

// let course = () => {
//     // alert("Bienvenue au magasin: ");
//     // alert("Nous avons des fruits (pomme et ananas), du chocolat et du pain.");
//     // alert(`${magasin}`)
//     for (let i in magasin) {
//         let ask = prompt("Voulez-vous acheter " + i);
//         if (ask == "oui") {
//             ayhan.argent -= magasin[i];
//         } else {
//             alert(`D'accord voici un autre element`)
//         };
//         alert(`Il vous reste ${ayhan.argent} €`)
//     };
// };

// // course();
// // console.log(ayhan.argent);

//Version 2

let magasin = [
    chocolat = {
        nom: "chocolat",
        prix: 3.00,
    },
    fruit = {
        nom: "fruit",
        prix: 2.50,
    },
    bonbon = {
        nom: "bonbon",
        prix: 4.68,
    },
];


let choix, arret;
let somme = 0;


while(arret != "non"){
    choix = prompt("Que voulez-vous (chocolat, fruit ou bonbon):");
    magasin.forEach((elem) => {
        if (choix == elem.nom) {
            somme += elem.prix
        }else {
            console.log('pas en stock');
        };
    });

    arret = prompt("Voulez-vous autre chose: (oui/non)");
};



let portefeuille = prompt("Combien avez-vous d'argent? ");

if(somme <= portefeuille){
    portefeuille -= somme;
    alert("Vous avez " + portefeuille);
} else {
    alert("Vous n'avez pas assez d'argent");
};

// version3
// console.log(magasin);
// console.log(personne);

// INTR0 for in//
// let maVoiture = {
//     marque : "audi",
//     prix: 20000,
//     couleur: "rouge"
// }
// for (const prop in maVoiture) {
//     console.log(`${prop} --> ${maVoiture[prop]}`);
// }

let personne = {
    argent: 30,
    panier: []
}

let magasin = {
    chocolat: {
        nom: 'choco',
        price: 2
    },
    tartine: {
        nom: 'tartine',
        price: 3
    },
    vendre(a) {
        let ask = confirm('faire des achats ?')
        while (ask) {
            let acheter = prompt(`quel element veux-tu?`);
            for (const key in this) {
                if (key == acheter) {
                    console.log(key);
                    console.log(magasin[key])
                    a.panier.push(key)
                    a.argent -= magasin[key].price
                }
            }
            ask = confirm('faire des achats ?')
        }
        course = (a) => {
            // alert("Bienvenue au magasin: ");
            // alert("Nous avons des fruits (pomme et ananas), du chocolat et du pain.");
            // alert(`${magasin}`)
            for (const key in this) {
                let ask = prompt("Voulez-vous acheter " + key);
                if (ask == "oui") {
                    a.argent -= magasin[key];
                } else {
                    alert(`D'accord voici un autre element`)
                };
                alert(`Il vous reste ${a.argent} €`)
            };
        };
        // let acheter = prompt('quel element veux-tu?');
        // for (const key in this) {
        //     console.log(key);
        //     if (key == acheter) {
        //         console.log(key);
        //         console.log(magasin[key])
        //         a.argent -= magasin[key]
        //     }
        // }
    }
}
magasin.vendre(personne);


//2
let vieille_dame = {
    age: 80,
    nom: {
        nom: "dos Santos",
        prenom: "Maria",
    },
    moral: "mal",
    objet: "canne",
    se_plaindre(a) {
        if (this.moral == "mal") {
            console.log("Vous me dérangez " + a.nom);
        } else if (this.moral == "bien") {
            console.log("bonjour monsieur " + a.nom)
        }
    },
    se_promener() {
        this.objet = "perdu";
        return this.objet;
    }
};

let vieil_homme = {
    nom: "Antonio",
    prenom: "da Silva",
    age: 62,
    saluer() {
        console.log("Bonjour " + vieille_dame.nom.prenom + " " + vieille_dame.nom.nom);
        vieille_dame.se_plaindre(this);
    },
    adoucir() {
        return vieille_dame.moral = "bien";
    }
};


vieille_dame.se_plaindre(vieil_homme);
vieille_dame.se_plaindre(vieil_homme2);

console.log(vieille_dame.objet)
console.log(vieille_dame.se_promener());

vieil_homme.saluer();
vieil_homme.adoucir();
vieille_dame.se_plaindre(vieil_homme)