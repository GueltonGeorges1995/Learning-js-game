import Player from  './Class/Player.js';
import Monster from './Class/Monster.js';
import Chest from './Class/Chest.js';

// Introduire quel position de tableau prendre pour les monstres.
let positionMonster;
// Introduire quel poisition de tableau prendre pour les tableaux.
let positionChest;
// Introduire si il va tomber sur un coffre ou un monstre.
let luck;
// Introduire cimetière.
let cemetery= [];
// Introduire le choix du joueur
let choice = 0;

// Introduire le nom du joueur.
let heroesName = prompt("Entez le nom de votre personnage.");



// Introduire le joueur.
let player1 = new Player (heroesName,100,100,10,10);


// Introduire les 6 monstres.
let monster1 = new Monster("Thomas",20,5,5);
let monster2 = new Monster("Pierre",20,5,5);
let monster3 = new Monster("Georges",20,5,5);
let monster4 = new Monster("Albi",20,5,5);
let monster5 = new Monster("Arno",20,5,5);
let monster6 = new Monster("Majda",20,5,5);

// Je places mes monstres dans un tableau.
let monsterTab = [monster1,monster2,monster3,monster4,monster5,monster6];

// Introduire les trois coffres.
// attsp,hp,dmg
let chest1 = new Chest(5,0,15);
let chest2 = new Chest(10,5,0);
let chest3 = new Chest(5,30,0);

// Je place mes coffres dans un tableau.
let chestTab = [chest1,chest2,chest3];


// Je défini mon arène.
let arena = [player1];

// Je décide si je dois appeler un monstre ou un coffre dans l'arène.
// Si je tombe sur 0 un monstre est envoyé dans l'arène.
// Si je tombe sur 1 un coffre est envoyé dans l'arène.


luck = Math.floor(Math.random() * 2); // je fais un random entre 0 et 1
console.log(luck);




let test;

if (luck == 0){
    console.log("Vous tombez sur un énorme monstre !");
    positionMonster = Math.floor(Math.random() * 6); // je génère un chiffre entre 0 et 5
    arena.push(monsterTab[positionMonster]); // je vais mettre dans l'arène le monstre a la position choisi
    monsterTab.splice(positionMonster,1) // j'enlève le monstre de la place ou il était dans monsterTab
    
    
    while(test = true){
        if(player1.hp > 0 || arena[1].hp > 0){
            test = true;
        }
        if(player1.attackSpeed > arena[1].attackSpeed){
            choice = Number(prompt("Entrez 1 pour attaquer le monstre ou 2 pour vous soigner ! "));
            if(choice == 1){
                console.log("Vous avez décidé d'attaquer le monstre !");
                player1.swordAttack(player1,arena[1]);
                arena[1].clawsAttack(player1,arena[1]);
            }
            else {
                console.log("Vous avez décidé de vous soigner ! ");
                player1.healingSpell(player1);
                console.log("Votre joueur a " +player1.hp + " point de vie");
                arena[1].clawsAttack(player1,arena[1]);

            }
        }
    }

}











else {
    positionChest = Math.floor(Math.random() * 3); // je génère un chiffre entre 0 et 2
    arena.push(chestTab[positionChest]); // je vais mettre dans l'arène le coffre à la position choisi
    console.log("Le coffre se trouve en "+positionChest+ " dans le tableau");
    console.log(arena)
    chestTab.splice(positionChest,1) // J'enlève le coffre de la ou il était dans chestTab
    console.log(chestTab)
}

