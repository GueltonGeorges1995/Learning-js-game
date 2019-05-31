export default class Player {
    constructor(name,hp,maxHp,attackSpeed,damage){
        this.name = name;
        this.hp = hp;
        this.maxHp = maxHp;
        this.attackSpeed = attackSpeed;
        this.damage = damage;
    }
    swordAttack(y){  
        y.hp -= this.damage
        console.log("Le monstre à perdu "+ this.damage+" point de vie. Il  lui reste donc "+y.hp+ " point de vie");
    }
    healingSpell(){
        if(this.hp == 100){
            console.log("Votre vie est déjà au maximum");
        }
        else {
            console.log("Vous vous soignez de 15 point de vie .");
            this.hp += 15
            if( this.hp > 100){
                this.hp = 100
            }
        }
        
    }
    lootChest(y){
        this.hp += y.hp;
        this.damage += y.damage;
        this.attackSpeed += y.attackSpeed;
        if(this.hp == 100){
            console.log("Votre vie est déjà au maximum");
            y.hpChest = 0;
        }
        else {
            console.log("Vous vous soignez de 15 point de vie .");
            this.hp += 15
            y.hpChest = 0;
            if( this.hp > 100){
                this.hp = 100
            }
        }
    }


}   

