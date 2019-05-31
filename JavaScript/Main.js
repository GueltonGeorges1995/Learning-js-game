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
let monster1 = new Monster("Thomas",20,15,5);
let monster2 = new Monster("Pierre",20,15,5);
let monster3 = new Monster("Georges",20,15,5);
let monster4 = new Monster("Albi",20,15,15);
let monster5 = new Monster("Arno",20,15,15);
let monster6 = new Monster("Majda",20,15,15);

// Je places mes monstres dans un tableau.
let monsterTab = [monster1,monster2,monster3,monster4,monster5,monster6];

// Introduire les trois coffres.
// attsp,hp,dmg
let chest1 = new Chest(5,0,15,"Bonus 1",1);
let chest2 = new Chest(10,5,0,"Bonus 2",1);
let chest3 = new Chest(5,30,0,"Bonus 3",1);

// Je place mes coffres dans un tableau.
let chestTab = [chest1,chest2,chest3];


// Je défini mon arène.
let arena = [player1];

// Je décide si je dois appeler un monstre ou un coffre dans l'arène.
// Si je tombe sur 0 un monstre est envoyé dans l'arène.
// Si je tombe sur 1 un coffre est envoyé dans l'arène.

let dead = 0;



luck = Math.floor(Math.random() * 2); // je fais un random entre 0 et 1
console.log(luck);



// je définis ma condition d'arrêt de boucle

// random pour voir ce qu'il va y avoir dans le tab arena
if (luck == 0){
    console.log("Vous tombez sur un énorme monstre !");
    positionMonster = Math.floor(Math.random() * 6); // je génère un chiffre entre 0 et 5
    arena.push(monsterTab[positionMonster]); // je vais mettre dans l'arène le monstre a la position choisi
    monsterTab.splice(positionMonster,1) // j'enlève le monstre de la place ou il était dans monsterTab
    
    // Tant que ma condition est vrai
    while(dead == 0){
            if(player1.attackSpeed > arena[1].attackSpeed){ // Si je suis plus rapide que le monstre
                choice = Number(prompt("Entrez 1 pour attaquer le monstre ou 2 pour vous soigner ! "));
                if(choice == 1){
                    console.log("Vous avez décidé d'attaquer le monstre !");
                    player1.swordAttack(arena[1]);
                    arena[1].clawsAttack(player1);
                }
                else {
                    console.log("Vous avez décidé de vous soigner ! ");
                    player1.healingSpell(player1);
                    console.log("Votre joueur a " +player1.hp + " point de vie");
                    arena[1].clawsAttack(player1);

                }
            }else if (player1.attackSpeed < arena[1].attackSpeed){ // Si je suis moins rapide que le monstre 
                arena[1].clawsAttack(player1);
                console.log("Le monstre est plus rapide que vous");
                choice = Number(prompt("Entrez 1 pour attaquer le monstre ou 2 pour vous soigner ! "));
                if(choice ==1){
                    console.log("Vous avez décidé d'attaquer le monstre !");
                    player1.swordAttack(arena[1]);
                    // arena[1].clawsAttack(player1,arena[1]);
                }else {
                    console.log("Vous avez décidé de vous soigner ! ");
                    player1.healingSpell(player1);
                    console.log("Votre joueur a " +player1.hp + " point de vie");
                    // arena[1].clawsAttack(player1,arena[1]);
                }
            }
            
            // Ma condition pour sortir de ma boucle
            if(player1.hp == 0){
                dead = 1;
                console.log("Vous êtes mort");
                nb = 10
            }
            else if(arena[1].hp == 0){
                dead = 1;
                console.log("Le monstre est mort");
                arena.splice(1,1);
                console.log(arena);
                nb+= 1;
            }
            else if (arena[1].hpChest == 0){
                dead = 1;
                console.log("Le coffre à été looté");
                arena.splice(1,1);
                console.log(arena)
                nb += 1;
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
    player1.lootChest(arena[1]);
    console.log(player1);
}

