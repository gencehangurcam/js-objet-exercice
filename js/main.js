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
vieille_dame.se_plaindre(vieil_homme);

console.log(vieille_dame.objet)
console.log(vieille_dame.se_promener());

vieil_homme.saluer();
vieil_homme.adoucir();
vieille_dame.se_plaindre(vieil_homme)