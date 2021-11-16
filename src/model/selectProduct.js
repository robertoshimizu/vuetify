function sumArray(a, b) {
        var c = [];
        for (var i = 0; i < Math.max(a.length, b.length); i++) {
          c.push((a[i] || 0) + (b[i] || 0));
        }
        return c;
    }

export default class QuoteGenerator {
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

    getRates(){

        let json = require('../data/retornoAPI.json');

        var t_m = json.map((item) => {
            return item.M1 / 1000;
        });
        var t_ipa = json.map((item) => {
            return item.IPA / 1000;
        });
        var t_saf = json.map((item) => {
            return item.SAF_indiv / 1000;
        });

        var t_dg = json.map((item) => {
            return item.DG / 1000;
        });
        var t_dit = json.map((item) => {
            return item.DIT15 / 1000;
        });

        var rates = [];

        // morte
        let i = t_m.indexOf(Math.min(...t_m));
        let foo = {
        index:1,
        seguradora: json[i].seguradora,
        duration: json[i].tipo,
        price: this.mt * t_m[i],
        coberturas:["morte"]
        };
        rates.push(foo);

        // morte + ipa
        let p_m = t_m.map((x)=> this.mt * x);
        let p_ipa = t_ipa.map((x)=> this.ipa * x);
        var sum1= sumArray(p_m,p_ipa);
        i = sum1.indexOf(Math.min(...sum1));
        foo = {
        index:2,
        seguradora: json[i].seguradora,
        duration: json[i].tipo,
        price: sum1[i],
        coberturas:["morte", "invalidez permanente total"]
        };
        rates.push(foo);

        // morte + ipa + saf
        let p_saf = t_saf.map((x)=> this.saf * x);
        var sum2= sumArray(sum1,p_saf);
        i = sum2.indexOf(Math.min(...sum2));
        foo = {
        index:3,
        seguradora: json[i].seguradora,
        duration: json[i].tipo,
        price: sum2[i],
        coberturas:[
            "morte",
            "invalidez permanente total",
            "despesas funerárias individual",
          ],
        };
        rates.push(foo);

        // morte + ipa + saf + dg
        let p_dg = t_dg.map((x)=> this.dg * x);
        var sum3= sumArray(sum1,p_dg);
        i = sum3.indexOf(Math.min(...sum3));
        foo = {
        index:4,
        seguradora: json[i].seguradora,
        duration: json[i].tipo,
        price: sum3[i],
        coberturas:[
            "morte",
            "invalidez permanente total",
            "despesas funerárias individual",
            "doenças críticas",
          ],
        };
        rates.push(foo);

        // morte + ipa + dg + dit
        let p_dit = t_dit.map((x)=> this.dit * x);
        var sum4= sumArray(sum3,p_dit);
        i = sum4.indexOf(Math.min(...sum4));
        foo = {
        index:5,
        seguradora: json[i].seguradora,
        duration: json[i].tipo,
        price: sum4[i],
        coberturas:[
            "morte",
            "invalidez permanente total",
            "despesas funerárias individual",
            "diária de incapacidade temporária",
          ],
        };
        rates.push(foo);

        // morte + ipa + saf + dg + dit
        
        var sum6= sumArray(sum4,p_saf);
        i = sum6.indexOf(Math.min(...sum6));
        foo = {
        index:6,
        seguradora: json[i].seguradora,
        duration: json[i].tipo,
        price: sum6[i],
        coberturas:[
            "morte",
            "invalidez permanente total",
            "despesas funerárias individual",
            "diária de incapacidade temporária",
            "doenças críticas",
          ],
        };
        rates.push(foo);

        return rates;

    }




}


