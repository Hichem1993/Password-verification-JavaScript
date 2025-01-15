// Définir les variables
let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");


// Lorsque l'utilisateur clique sur le champ du mot de passe, afficher la boite message
myInput.onfocus = () => {
    document.getElementById("message").style.display = "block";
}


// Lorsque l'utilisateur clique en dehors du champ mot de passe, masquer la boite message
myInput.onblur = () => {
    document.getElementById("message").style.display = "none";
}


// Losque l'utilisateur commence a taper quelque chose dans le champs mot de passe
myInput.onkeyup = () => {
    // valider les lettres miniscule
    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)){
        // Si le mot de passe contient une lettre minuscule, enlever la class invalid et ajouter la class valid
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    }else{
        // si non, enlever la class valid et ajouter la class invalid
        letter.classList.remove('valid')
        letter.classList.add('invalid')
    }



    // valider les lettres majuscule
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)){
        // Si le mot de passe contient une lettre majuscule, enlever la class invalid et ajouter la class valid
        capital.classList.remove('invalid')
        capital.classList.add('valid')
    }else{
        // si non, enlever la class valid et ajouter la class invalid
        capital.classList.remove('valid')
        capital.classList.add('invalid')
    }



    // valider les chiffres
    let chiffre = /[0-9]/g;
    if (myInput.value.match(chiffre)){
        // Si le mot de passe contient un chiffre, enlever la class invalid et ajouter la class valid
        number.classList.remove('invalid')
        number.classList.add('valid')
    }else{
        // si non, enlever la class valid et ajouter la class invalid
        number.classList.remove('valid')
        number.classList.add('invalid')
    }



    // valider la longueur
    if (myInput.value.length >= 8){
        // Si le mot de passe contient un chiffre, enlever la class invalid et ajouter la class valid
        length.classList.remove('invalid')
        length.classList.add('valid')
    }else{
        // si non, enlever la class valid et ajouter la class invalid
        length.classList.remove('valid')
        length.classList.add('invalid')
    }

}