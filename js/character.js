// criando a classe de personagem
// ele sera usado como base para os monstros e os jogadores

class Character{
    /**
     * @var {string} name 
     */
    _name;

    /**
     * @var {int} exp 
     */
    _exp;

    /**
     * @var {int} hp 
     */
    _hp;

    /**
     * @var {int} atack 
     */
    _atack;

    /**
     * @var {int} def 
     */
    _def;

    /**
     * @var {int} lv 
     */
    _lv;

    /**
     * @var {img} pic
     */
    _pic

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
    constructor(name,exp=0,hp,atack,def,lv=1,pic=""){
        this._name = name;
        this._exp = exp;
        this._hp = hp;
        this._atack = atack;
        this._def = def;
        this._lv = lv;
        this._pic = pic;
    }

    /**
     * 
     * @param {string} name 
     */
    getName(){
        return this._name;
    }
    setName(name){
        return this._name = name;
    }

    /**
     * 
     * @param {int} exp 
     */
    getExp(){
        return this._exp;
    }

    setExp(exp){
        return this._exp = exp;
    }
    
    /**
     * 
     * @param {int} hp 
     * @returns 
     */
    getHp(){
        return this._hp;
    }
    setHp(hp){
        return this._hp = hp;
    }

    /**
     * 
     * @param {int} atack 
     * @returns 
     */
    getAtack(){
        return this._atack;
    }
    setAtack(atack){
        return this._atack = atack;
    }

    /**
     * 
     * @param {int} def 
     * @returns 
     */
    getDef(){
        return this._def;
    }
    setDef(def){
        return this._def = def;
    }

    /**
     * 
     * @param {int} lv 
     * @returns 
     */
    getLv(){
        return this._lv;
    }
    setLv(lv){
        return this._lv = lv;
    }

    /**
     * 
     * @param {img} pic 
     * @returns 
     */
    getPic(){
        return this._pic;
    }
    setPic(pic){
        return this._pic = pic;
    }

}
export default Character;