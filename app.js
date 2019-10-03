/* 

--> L'exercice est à utiliser avec NodeJS (ie. npm init)
--> Ne pas oublier de commit sur votre propre repo
--> ajouter un .gitignore au moment du commit

1. Filtrer dans un tableau tous les users qui ont le nom Jones et console.log.
2. Filtrer les différents films par ordre alphabétique et console.log
3. Ajouter pour chaque utilisateur un nouvel objet 'password' avec une valeur et console log tous les users.
4. Afficher dans un tableau tous les passwords en majuscule
5. Si le password < 8 caractères afficher "Mot de passe faible" sinon "Mot de passe OK"
6. Comparer les meilleurs passwords entre eux : les afficher dans un tableau du meilleur au moins bon (ie. le meilleur password étant celui qui est le plus long)
7. Afficher dans un tableau tous les users par âge croissant
8. Ajouter un objet "video game" pour tous les utilisateurs qui ont moins de 45 ans 
9. Ajouter un objet voiture à chaque utilisateur et afficher un tableau qui ressort les prix de voitures les moins chères par rapport au budget global (ie. 30000 euros)
10. Afficher l'année de naissance des utilisateurs dans un tableau par rapport à l'année en cours (2019)

*/

const globalUsers = {
  users: {
    spy: {
      name: "John Doe",
      age: 35,
      favMovie: "Star Wars"
    },

    aventurier: {
      name: "Indiana Jones",
      age: 55,
      favMovie: "Pulp Fiction"
    },

    "The best lawyer": {
      name: "Alicia Florrick",
      age: 12,
      favMovie: "The Good Wife"
    },

    superhero: {
      name: "Jessica Jones",
      age: 26,
      favMovie: "Dardevil"
    }
  }
};

const priceCarMax = 30000;
