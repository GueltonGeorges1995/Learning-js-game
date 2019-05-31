export default class Player {
    constructor(name,hp,maxHp,attackSpeed,damage){
        this.name = name;
        this.hp = hp;
        this.maxHp = maxHp;
        this.attackSpeed = attackSpeed;
        this.damage = damage;
    }
    swordAttack(x,y){  
        y.hp -= x.damage
        console.log("Le monstre à perdu "+ x.damage+" point de vie. Il  lui reste donc "+y.hp+ " point de vie");
    }
    healingSpell(x){
        if(x.hp == 100){
            console.log("Votre vie est déjà au maximum");
        }
        else {
            console.log("Vous vous soignez de 15 point de vie .");
            x.hp += 15
            if( x.hp > 100){
                x.hp = 100
            }
        }
    }


}   

