
export default class SelectProduct {
    constructor(mt, ipa, dg, dit, saf){
        this.mt = mt;
        this.ipa = ipa;
        this.dg = dg;
        this.dit = dit;
        this.saf = saf
    }


    getJson(){
        let json = require('../data/retornoAPI.json');
        return json;
    }


}
