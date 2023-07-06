var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClass = /** @class */ (function () {
    //constructor를 통해서 객체를 생성할때 속성의 값 지정
    function MyClass(name) {
        var _this = this;
        this.name = '';
        this.money = 0;
        //함수형태로 메소드를 만들어서 사용
        this.setMoney = function (money) {
            _this.money = money;
        };
        this.name = name;
    }
    return MyClass;
}());
//타입스크립트로 작성하는 클래스
//Accessor : 접근할수 없는 속성(provatie)에 get과 set을 이용하여 접근
var MyTypeClass = /** @class */ (function () {
    function MyTypeClass() {
        this.money = 0;
    }
    Object.defineProperty(MyTypeClass.prototype, "getname", {
        //set과 get을 통해 접근
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyTypeClass.prototype, "setname", {
        set: function (newValue) {
            this.name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return MyTypeClass;
}());
var mytypeclass = new MyTypeClass();
mytypeclass.money = 1000;
mytypeclass.setname = 'green';
var Develgoper2 = /** @class */ (function () {
    function Develgoper2() {
    }
    Develgoper2.prototype.drink = function () {
        console.log('drink');
    };
    return Develgoper2;
}());
var FrontEndDeveloper = /** @class */ (function (_super) {
    __extends(FrontEndDeveloper, _super);
    function FrontEndDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontEndDeveloper.prototype.coding = function () {
        console.log('develop wed');
    };
    FrontEndDeveloper.prototype.design = function () {
        console.log('desgin web');
    };
    return FrontEndDeveloper;
}(Develgoper2));
var front = new FrontEndDeveloper();
front.drink();
front.design();
front.coding();
//제네릭
//타입(자료형)을 함수의 파라미터처럼 사용한것
function getText(text) {
    return text;
}
console.log(getText('hi'));
console.log(getText(10));
console.log(getText(true));
