import Character from "./character.js";

class Player extends Character{

    /**
     * @var {string} class
     */
    #type;

        /**
     * 
     * @param {string} name 
     * @param {int} exp 
     * @param {int} hp 
     * @param {int} atack 
     * @param {int} def 
     * @param {int} lv 
     * @param {img} pic
     */
    constructor(name,exp=0,hp,atack,def,lv=1,pic,type){
        super(name,exp,hp,atack,def,lv,pic);
        this.#type = type
    }

    /**
     * 
     * @param {*} type 
     * @returns 
     */
    getType(){
        return this.#type
    }
    setType(type){
        return this.#type = type
    }
}