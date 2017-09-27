webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n    font-size: 25px;\n    color: rgba(10, 45, 180, 09);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div *ngIf=\"escolherModulo; else start\">\n    <app-level (myFrases)=\"getFrases($event)\"></app-level>\n</div>\n<ng-template #start>\n    <div *ngIf=\"jogoEmAndamento; else endGame\" #start>\n        <app-painel [frases]='FRASES' [modulo]='modulo' (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n    </div>\n</ng-template>\n\n<ng-template #endGame>\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n            <div *ngIf=\"tipoDeEncerramento === 'win'; else showLose\" class=\"row\">\n                <div class=\"col\">\n                    <h3 class=\"label-win\"> Congratulations, you win {{modulo}} !</h3>\n                    <div class=\"d-flex justify-content-end\">\n                        <button class=\"btn btn-primary\" (click)=\"nextLevel()\">Next</button>\n                    </div>    \n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #showLose>\n    <div class=\"col\">\n        <h3 class=\"label-lose\"> Game Over :'( Better luck next time !</h3>\n        <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Restart</button>\n        </div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_level_mock__ = __webpack_require__("../../../../../src/app/shared/level-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Learn English';
        this.jogoEmAndamento = false;
        this.escolherModulo = true;
    }
    AppComponent.prototype.ngOnChanges = function () {
    };
    AppComponent.prototype.getFrases = function (level) {
        this.modulo = level.name;
        this.FRASES = level.frases;
        this.id = level.id;
        this.escolherModulo = false;
        this.jogoEmAndamento = true;
    };
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        this.tipoDeEncerramento = tipo;
    };
    AppComponent.prototype.nextLevel = function () {
        this.id += 1;
        this.modulo = __WEBPACK_IMPORTED_MODULE_1__shared_level_mock__["a" /* LEVEL */][this.id].name;
        this.FRASES = __WEBPACK_IMPORTED_MODULE_1__shared_level_mock__["a" /* LEVEL */][this.id].frases;
        this.jogoEmAndamento = true;
        this.tipoDeEncerramento = undefined;
    };
    AppComponent.prototype.reiniciarJogo = function () {
        this.jogoEmAndamento = false;
        this.escolherModulo = true;
        this.tipoDeEncerramento = undefined;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__painel_painel_component__ = __webpack_require__("../../../../../src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tentativas_tentativas_component__ = __webpack_require__("../../../../../src/app/tentativas/tentativas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progresso_progresso_component__ = __webpack_require__("../../../../../src/app/progresso/progresso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__level_level_component__ = __webpack_require__("../../../../../src/app/level/level.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__painel_painel_component__["a" /* PainelComponent */],
            __WEBPACK_IMPORTED_MODULE_4__tentativas_tentativas_component__["a" /* TentativasComponent */],
            __WEBPACK_IMPORTED_MODULE_5__progresso_progresso_component__["a" /* ProgressoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__level_level_component__["a" /* LevelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded\" style=\"background: #1CB0F6\">\n  <h1 class=\"navbar-brand mb-0\" style=\"color: white\">{{getTitle()}}</h1>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = "Learn English";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getTitle = function () {
        return this.title;
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "title", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/level/level.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-group{\n    width: 100%;\n    margin: 10px 0px 10px 0px;\n}\n\n.btn{\n    width: inherit;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/level/level.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div *ngFor=\"let level of levels\" class=\"btn-group\">\n      <button class=\"btn btn-secondary btn-success btn-lg dropdown-toggle\" \n              type=\"button\" \n              data-toggle=\"dropdown\" \n              aria-haspopup=\"false\" \n              aria-expanded=\"true\"\n              (click)=\"getMyFrases(level)\"\n      >\n        {{level.name}}\n      </button>\n      <div class=\"dropdown-menu\">\n        <p class=\"dropdown-item\">TESTE</p>\n        <p class=\"dropdown-item\">TESTE</p>\n      </div>\n    </div>\n  </div>\n</div>\n        \n"

/***/ }),

/***/ "../../../../../src/app/level/level.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_level_mock__ = __webpack_require__("../../../../../src/app/shared/level-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LevelComponent = (function () {
    function LevelComponent() {
        this.levels = __WEBPACK_IMPORTED_MODULE_1__shared_level_mock__["a" /* LEVEL */];
        this.myFrases = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LevelComponent.prototype.ngOnInit = function () {
    };
    LevelComponent.prototype.getMyFrases = function (object) {
        this.myFrases.emit(object);
    };
    return LevelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], LevelComponent.prototype, "myFrases", void 0);
LevelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-level',
        template: __webpack_require__("../../../../../src/app/level/level.component.html"),
        styles: [__webpack_require__("../../../../../src/app/level/level.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LevelComponent);

var _a;
//# sourceMappingURL=level.component.js.map

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header [title]=\"modulo\"></app-header>\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p> {{rodada}} / {{frases.length}}</p>\n        <app-progresso [progressProgress]=\"progressPainel\"></app-progresso>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"d-flex justify-content-end\">\n          <app-tentativas [tentativasT]=\"tentativasP\" [flag]=\"flag\"></app-tentativas>\n        </div>\n      </div>\n    </div> \n    <div class=\"row\">\n      <div class=\"col\">\n        <h6 style=\"font-weight: bold\"> {{ instrucao }} </h6>\n        <p style=\"margin-left: 20px\"> {{ rodadaFrase.fraseEng }} </p>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" rows=\"3\" [value]=\"resposta\" (focusout)=\"atualizaResposta($event)\"></textarea>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button type=\"button\" (click)=\"verificarResposta()\" class=\"btn btn-primary\">Verificar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PainelComponent = (function () {
    function PainelComponent() {
        this.instrucao = "Traduza a frase";
        this.resposta = '';
        this.rodada = 0;
        this.tentativasP = -1;
        this.flag = true;
        this.progressPainel = 0;
        this.encerrarJogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PainelComponent.prototype.ngOnInit = function () {
        this.atualizaRodada();
    };
    PainelComponent.prototype.ngOnDestroy = function () {
    };
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        this.resposta = resposta.target.value;
    };
    PainelComponent.prototype.verificarResposta = function () {
        if (this.resposta == this.rodadaFrase.frasePtbr) {
            //atualiza porcentagem da barra de progresso
            this.progressPainel += 100 / this.frases.length;
            //atualiza indica da pergunta
            this.rodada++;
            //verifica se ganhou o jogo
            this.fimDeJogo();
            //atualiza pergunta da rodada  
            this.atualizaRodada();
            //verifica se é necessário adicionar tentativas
            if (this.tentativasP >= 0) {
                this.flag = true;
                this.tentativasP--;
            }
        }
        else {
            //decrementa número de tentativas
            this.flag = false;
            this.tentativasP++;
            //verifica se acabou as tentativas
            this.fimDeJogo();
        }
    };
    PainelComponent.prototype.atualizaRodada = function () {
        this.rodadaFrase = this.frases[this.rodada];
        this.resposta = '';
    };
    PainelComponent.prototype.fimDeJogo = function () {
        if (this.rodada === this.frases.length)
            this.encerrarJogo.emit("win");
        if (this.tentativasP === 3)
            this.encerrarJogo.emit("lose");
    };
    return PainelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], PainelComponent.prototype, "frases", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('modulo'),
    __metadata("design:type", String)
], PainelComponent.prototype, "modulo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], PainelComponent.prototype, "encerrarJogo", void 0);
PainelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-painel',
        template: __webpack_require__("../../../../../src/app/painel/painel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/painel/painel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PainelComponent);

var _a;
//# sourceMappingURL=painel.component.js.map

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\n    background: #EEF8DA;\n    border: 1px solid #99CE28;\n    margin: 10px 0;\n}\n\n.progress-bar{\n    background: #99CE28;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div id=\"progress\" class=\"progress-bar\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = (function () {
    function ProgressoComponent() {
        this.progressProgress = 0;
    }
    ProgressoComponent.prototype.ngOnChanges = function () {
        document.getElementById("progress").style.width = this.progressProgress + '%';
    };
    ProgressoComponent.prototype.ngOnInit = function () {
        document.getElementById("progress").style.width = this.progressProgress + '%';
    };
    return ProgressoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressoComponent.prototype, "progressProgress", void 0);
ProgressoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-progresso',
        template: __webpack_require__("../../../../../src/app/progresso/progresso.component.html"),
        styles: [__webpack_require__("../../../../../src/app/progresso/progresso.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgressoComponent);

//# sourceMappingURL=progresso.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/coracao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coracao; });
var Coracao = (function () {
    function Coracao(cheio) {
        this.coracaoCheio = "/assets/coracao_cheio.png";
        this.coracaoVazio = "/assets/coracao_vazio.png";
        this.cheio = cheio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.coracaoCheio;
        }
        else {
            return this.coracaoVazio;
        }
    };
    return Coracao;
}());

//# sourceMappingURL=coracao.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/frases-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FRASES1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FRASES2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FRASES3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FRASES4; });
var FRASES0 = [
    {
        fraseEng: "Follow your steps and you will find",
        frasePtbr: "Siga os seus passos e você descobrirá"
    },
    {
        fraseEng: "The unknown ways are in your mind",
        frasePtbr: "Os caminhos desconhecidos estão na sua cabeça"
    },
    {
        fraseEng: "Need nothing else than just your pride",
        frasePtbr: "Não precisa de mais nada além de seu orgulho"
    },
    {
        fraseEng: "To get there",
        frasePtbr: "Para chegar lá"
    },
    {
        fraseEng: "So, carry on",
        frasePtbr: "Então, siga em frente"
    },
    {
        fraseEng: "There's a meaning to life",
        frasePtbr: "Existe um sentido para a vida"
    },
    {
        fraseEng: "Which someday we may find",
        frasePtbr: "Que algum dia poderemos descobrir"
    },
    {
        fraseEng: "Carry on, it's time to forget",
        frasePtbr: "Siga em frente, é hora de esquecer"
    },
    {
        fraseEng: "The remains from the past to carry on",
        frasePtbr: "Os restos do passado para seguir em frente"
    },
];
var FRASES1 = [
    {
        fraseEng: "A leader, a learner",
        frasePtbr: "Um líder, um aprendiz"
    },
    {
        fraseEng: "A lawful beginner",
        frasePtbr: "Um honesto iniciante"
    },
    {
        fraseEng: "A lodger of lunacy",
        frasePtbr: "Um locatário de insensatez"
    },
    {
        fraseEng: "So lucid in the jungle",
        frasePtbr: "Tão lucido na selva"
    },
    {
        fraseEng: "A helper, a sinner",
        frasePtbr: "Um ajudante, um cantor"
    },
    {
        fraseEng: "A scarecrow's agonyzing smile",
        frasePtbr: "Um sorriso agonizante de um espantalho"
    },
    {
        fraseEng: "Ride the winds of a brand new day",
        frasePtbr: "Vou pelos ventos de um novo dia"
    },
    {
        fraseEng: "High where mountain's stand",
        frasePtbr: "Alto onde as montanhas alcançam"
    },
    {
        fraseEng: "Found my hope and pride again",
        frasePtbr: "Encontrei minha esperança e orgulho de novo"
    },
    {
        fraseEng: "Rebirth of a man",
        frasePtbr: "Renascimento de um homem"
    }
];
var FRASES2 = [
    {
        fraseEng: "Somehow I know",
        frasePtbr: "De alguma maneira eu sei"
    },
    {
        fraseEng: "That things are gonna change",
        frasePtbr: "Que as coisas mudarão"
    },
    {
        fraseEng: "New boundaries on the way",
        frasePtbr: "Novas fronteiras no caminho"
    },
    {
        fraseEng: "Like never were before",
        frasePtbr: "Como jamais estiveram"
    },
    {
        fraseEng: "Find a meaning to your life",
        frasePtbr: "Encontre um sentido para sua vida"
    },
    {
        fraseEng: "Hear the whispers of the angels",
        frasePtbr: "Ouça os sussurros dos anjos"
    },
    {
        fraseEng: "Bring the sunrise again",
        frasePtbr: "Trazem o sol de novo"
    }
];
var FRASES3 = [
    {
        fraseEng: "So now we fly ever free",
        frasePtbr: "Então agora sempre voamos livres"
    },
    {
        fraseEng: "We're free before the thunderstorm",
        frasePtbr: "Nós estamos livres antes da tempestade"
    },
    {
        fraseEng: "On towards the wilderness our quest carries on",
        frasePtbr: "Na direção do vazio nossa missão continua"
    },
    {
        fraseEng: "Far beyond the sundown, far beyond the moonlight",
        frasePtbr: "Muito além do nascer do sol, muito além da luar"
    },
    {
        fraseEng: "Deep inside our hearts and all our souls",
        frasePtbr: "Bem no fundo de nossos corações e de todas nossas almas"
    },
    {
        fraseEng: "So far away we wait for the day",
        frasePtbr: "Tão longe nós esperamos pelo dia"
    },
    {
        fraseEng: "For the lives all so wasted and gone",
        frasePtbr: "Por todas as vidas desperdiçadas e que se foram"
    },
    {
        fraseEng: "We feel the pain of a lifetime lost in a thousand days",
        frasePtbr: "Nós sentimos a dor de uma vida perdidao em mil dias"
    },
    {
        fraseEng: "Through the fire and the flames we carry on",
        frasePtbr: "Através do fogo e das chamas nós continuamos"
    }
];
var FRASES4 = [
    {
        fraseEng: "Riding on this crazy train",
        frasePtbr: "Pilotando este trem louco"
    },
    {
        fraseEng: "I'm going paranoid",
        frasePtbr: "Eu estou ficando paranóico"
    },
    {
        fraseEng: "Watch me lose my mind",
        frasePtbr: "Veja-me perder a cabeça"
    },
    {
        fraseEng: "And break the law",
        frasePtbr: "E quebrar a lei"
    },
    {
        fraseEng: "I'm a metal machine",
        frasePtbr: "Eu sou uma máquina de metal"
    },
    {
        fraseEng: "It's close to midnight and",
        frasePtbr: "Está perto da meia noite e"
    },
    {
        fraseEng: "He's barking at the moon",
        frasePtbr: "Ele está latindo para a lua"
    },
    {
        fraseEng: "I'm a metal machine",
        frasePtbr: "Eu sou uma máquina de metal"
    },
    {
        fraseEng: "A rainbow in the dark is shining",
        frasePtbr: "Um arco-íris no escuro está brilhando"
    },
    {
        fraseEng: "I'm a metal machine",
        frasePtbr: "Eu sou uma máquina de metal"
    },
    {
        fraseEng: "The kings of metal ride the sky",
        frasePtbr: "Os reis do metal cavalgam o céu"
    }
];
//# sourceMappingURL=frases-mock.js.map

/***/ }),

/***/ "../../../../../src/app/shared/level-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEVEL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frases_mock__ = __webpack_require__("../../../../../src/app/shared/frases-mock.ts");

var LEVEL = [
    {
        name: 'Level 1',
        id: 0,
        frases: __WEBPACK_IMPORTED_MODULE_0__frases_mock__["a" /* FRASES0 */],
        getLength: function () {
            return this.frases.getLength;
        },
        getFrase: function (id) {
            return this.frases[id];
        }
    },
    {
        name: 'Level 2',
        id: 1,
        frases: __WEBPACK_IMPORTED_MODULE_0__frases_mock__["b" /* FRASES1 */],
        getLength: function () {
            return this.frases.getLength;
        },
        getFrase: function (id) {
            return this.frases[id];
        }
    },
    {
        name: 'Level 3',
        id: 2,
        frases: __WEBPACK_IMPORTED_MODULE_0__frases_mock__["c" /* FRASES2 */],
        getLength: function () {
            return this.frases.getLength;
        },
        getFrase: function (id) {
            return this.frases[id];
        }
    },
    {
        name: 'Level 4',
        id: 3,
        frases: __WEBPACK_IMPORTED_MODULE_0__frases_mock__["d" /* FRASES3 */],
        getLength: function () {
            return this.frases.getLength;
        },
        getFrase: function (id) {
            return this.frases[id];
        }
    },
    {
        name: 'Level 5',
        id: 4,
        frases: __WEBPACK_IMPORTED_MODULE_0__frases_mock__["e" /* FRASES4 */],
        getLength: function () {
            return this.frases.getLength;
        },
        getFrase: function (id) {
            return this.frases[id];
        }
    },
];
//# sourceMappingURL=level-mock.js.map

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\"/>"

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__ = __webpack_require__("../../../../../src/app/shared/coracao.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = (function () {
    function TentativasComponent() {
        this.coracoes = [new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true)];
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        this.gainOrPain(this.flag);
    };
    TentativasComponent.prototype.ngOnInit = function () {
    };
    TentativasComponent.prototype.gainOrPain = function (flag) {
        if (flag) {
            this.coracoes[this.tentativasT + 1].cheio = true;
        }
        else {
            this.coracoes[this.tentativasT].cheio = false;
        }
    };
    return TentativasComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TentativasComponent.prototype, "tentativasT", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('flag'),
    __metadata("design:type", Boolean)
], TentativasComponent.prototype, "flag", void 0);
TentativasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-tentativas',
        template: __webpack_require__("../../../../../src/app/tentativas/tentativas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tentativas/tentativas.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TentativasComponent);

//# sourceMappingURL=tentativas.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map