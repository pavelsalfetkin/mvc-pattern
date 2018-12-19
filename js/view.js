// вывод результата
class View {
    constructor() {
        this.resultBlock = document.getElementById("showResult");
    }

    showResult (result) {
        this.resultBlock.innerHTML = result;
    }
};

export default View;