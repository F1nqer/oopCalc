interface INum {
    visio: string;
    operate: number;
}

class numm implements INum{
    visio: string;
    operate: number;
    clear: boolean;
    constructor(znach: string) {
        this.visio = znach;
        this.operate = (this.visio as unknown as number);
        this.clear = false;
    }
}

abstract class knopka{
    par = document.createElement("p");
    protected saver:numm = new numm('0');
    protected vivod:numm;
    public what:string;
    public action(how:string):void{
        console.log("knopka zapushena");
    }
}

class actions extends knopka{
    full:number;
    save:number;
    constructor(start:numm) {
        super();
        this.vivod = start;
    }

    inp(knopka:string):void{
        this.vivod.visio += knopka;
        this.vivod.operate = (this.vivod.visio as unknown as number);
        document.getElementById('res').innerText = this.vivod.visio;
    }

    chistka():void {
        this.vivod.visio = this.vivod.visio.slice(0, -1);
        this.vivod.operate = (this.vivod.visio as unknown as number);
        document.getElementById('res').innerText = this.vivod.visio;
    }

    sbros():void {
        document.getElementById('res').innerText = '0';
        this.vivod.operate = 0;
        this.vivod.visio = '';
    }


    action(how:string): void {
        super.action('0');

        if(how === '*'){
            this.full = Number(this.saver.operate) * Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = `${this.saver.visio} x ${this.save} = ${this.vivod.operate}`;
            document.getElementById('save').appendChild(this.par);
        }
        else if(how === '/'){
            this.full = Number(this.saver.operate) / Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = `${this.saver.visio} / ${this.save} = ${this.vivod.operate}`;
            document.getElementById('save').appendChild(this.par);

        }
        else if(how === '-'){
            this.full = Number(this.saver.operate) - Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = `${this.saver.visio} - ${this.save} = ${this.vivod.operate}`;
            document.getElementById('save').appendChild(this.par);

        }
        else if(how === '+'){
            this.full = Number(this.saver.operate) + Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = `${this.saver.visio} + ${this.save} = ${this.vivod.operate}`;
            document.getElementById('save').appendChild(this.par);
        }
        else{
            alert("SBOI SISTEMI!");
        }
        this.vivod.visio = (this.vivod.operate as unknown as string);
        document.getElementById('res').innerText = this.vivod.visio;

    }
    saving(what:string):void{
        this.what = what;
        this.saver.operate = this.vivod.operate;
        this.saver.visio = this.vivod.visio;
        document.getElementById('res').innerText = '0';
        this.vivod.operate = 0;
        this.vivod.visio = '';
    }
}

let check = new numm('0');
let act = new actions(check);










