import Model from "./model.js";
import View from "./view.js";


// события пользователя
class Controller {
    constructor (context) {
        this.context = context;
        this.model = new Model();
        this.view = new View();
        this.data = 0;
    }

    buttonClick () {
        // console.log(this.context);
        // console.log(this.model);
        
        this.a = parseInt(this.context.firstNum.value, 10);
        this.b = parseInt(this.context.secondNum.value, 10);

        // console.log(this.a);
        // console.log(this.b);

        this.model.calculate(this.a, this.b);
    }

    resultData (data) {
        // console.log(this.view);
        
        this.data = data;

        this.view.showResult(this.data);
    }
};

export default Controller;