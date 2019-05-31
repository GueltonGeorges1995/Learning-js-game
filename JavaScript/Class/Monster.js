export default class Monster {
    constructor(name,hp,attackSpeed,damage){
        this.name = name;
        this.hp = hp;
        this.attackSpeed = attackSpeed;
        this.damage = damage;
    }
    clawsAttack(x){
        x.hp -= this.damage;
        console.log("Vous avez perdu  "+this.damage+" point de vie, il vous reste reste donc "+x.hp+" point de vie ")
    }


}  