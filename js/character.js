// criando a classe de personagem
// ele sera usado como base para os monstros e os jogadores

class Character{
    /**
     * @var {string} name 
     */
    #name;

    /**
     * @var {int} exp 
     */
    #exp;

    /**
     * @var {int} hp 
     */
    #hp;

    /**
     * @var {int} atack 
     */
    #atack;

    /**
     * @var {int} def 
     */
    #def;

    /**
     * @var {int} lv 
     */
    #lv;

    /**
     * @var {img} pic
     */
    #pic

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
    constructor(name,exp=0,hp,atack,def,lv=1,pic){
        this.#name = name;
        this.#exp = exp;
        this.#hp = hp;
        this.#atack = atack;
        this.#def = def;
        this.#lv = lv;
        this.#pic = pic;
    }

    /**
     * 
     * @param {string} name 
     */
    getName(){
        return this.#name;
    }
    setName(name){
        return this.#name = name;
    }

    /**
     * 
     * @param {int} exp 
     */
    getExp(){
        return this.#exp;
    }

    setExp(exp){
        return this.#exp = exp;
    }
    
    /**
     * 
     * @param {int} hp 
     * @returns 
     */
    getHp(){
        return this.#hp;
    }
    setHp(hp){
        return this.#hp = hp;
    }

    /**
     * 
     * @param {int} atack 
     * @returns 
     */
    getAtack(){
        return this.#atack;
    }
    setAtack(atack){
        return this.#atack = atack;
    }

    /**
     * 
     * @param {int} def 
     * @returns 
     */
    getDef(){
        return this.#def;
    }
    setDef(def){
        return this.#def = def;
    }

    /**
     * 
     * @param {int} lv 
     * @returns 
     */
    getLv(){
        return this.#lv;
    }
    setLv(lv){
        return this.#lv = lv;
    }

    /**
     * 
     * @param {img} pic 
     * @returns 
     */
    getPic(){
        return this.#pic;
    }
    setPic(pic){
        return this.#pic = pic;
    }

}
export default Character;