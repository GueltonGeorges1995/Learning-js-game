export default class Monster {
    constructor(name,hp,attackSpeed,damage){
        this.name = name;
        this.hp = hp;
        this.attackSpeed = attackSpeed;
        this.damage = damage;
    }
    clawsAttack(x,y){
        x.hp -= y.damage;
        console.log("Vous avez perdu  "+y.damage+" point de vie, il vous reste reste donc "+x.hp+" point de vie ")
    }


}  