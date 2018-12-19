import Controller from "./controller.js";


// расчет результата
class Model {
    constructor() {
        this.result;
    }

    calculate (a, b) {
        this.controller = new Controller();
        this.result = a + b;
        this.controller.resultData(this.result);
    }

    
};

export default Model;