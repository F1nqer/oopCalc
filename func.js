var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var numm = /** @class */ (function () {
    function numm(znach) {
        this.visio = znach;
        this.operate = this.visio;
        this.clear = false;
    }
    return numm;
}());
var knopka = /** @class */ (function () {
    function knopka() {
        this.par = document.createElement("p");
        this.saver = new numm('0');
    }
    knopka.prototype.action = function (how) {
        console.log("knopka zapushena");
    };
    return knopka;
}());
var actions = /** @class */ (function (_super) {
    __extends(actions, _super);
    function actions(start) {
        var _this = _super.call(this) || this;
        _this.vivod = start;
        return _this;
    }
    actions.prototype.inp = function (knopka) {
        this.vivod.visio += knopka;
        this.vivod.operate = this.vivod.visio;
        document.getElementById('res').innerText = this.vivod.visio;
    };
    actions.prototype.chistka = function () {
        this.vivod.visio = this.vivod.visio.slice(0, -1);
        this.vivod.operate = this.vivod.visio;
        document.getElementById('res').innerText = this.vivod.visio;
    };
    actions.prototype.sbros = function () {
        document.getElementById('res').innerText = '0';
        this.vivod.operate = 0;
        this.vivod.visio = '';
    };
    actions.prototype.action = function (how) {
        _super.prototype.action.call(this, '0');
        if (how === '*') {
            this.full = Number(this.saver.operate) * Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = this.saver.visio + " x " + this.save + " = " + this.vivod.operate;
            document.getElementById('save').appendChild(this.par);
        }
        else if (how === '/') {
            this.full = Number(this.saver.operate) / Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = this.saver.visio + " / " + this.save + " = " + this.vivod.operate;
            document.getElementById('save').appendChild(this.par);
        }
        else if (how === '-') {
            this.full = Number(this.saver.operate) - Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = this.saver.visio + " - " + this.save + " = " + this.vivod.operate;
            document.getElementById('save').appendChild(this.par);
        }
        else if (how === '+') {
            this.full = Number(this.saver.operate) + Number(this.vivod.operate);
            this.save = this.vivod.operate;
            this.vivod.operate = this.full;
            this.par.innerText = this.saver.visio + " + " + this.save + " = " + this.vivod.operate;
            document.getElementById('save').appendChild(this.par);
        }
        else {
            alert("SBOI SISTEMI!");
        }
        this.vivod.visio = this.vivod.operate;
        document.getElementById('res').innerText = this.vivod.visio;
    };
    actions.prototype.saving = function (what) {
        this.what = what;
        this.saver.operate = this.vivod.operate;
        this.saver.visio = this.vivod.visio;
        document.getElementById('res').innerText = '0';
        this.vivod.operate = 0;
        this.vivod.visio = '';
    };
    return actions;
}(knopka));
var check = new numm('0');
var act = new actions(check);
