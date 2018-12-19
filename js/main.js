import Controller from "./controller.js";


(() => {

    const app = { // this

        // тут подключаются все необходимые методы
        init: function () {
            console.log("app.init");
            this.main();
            this.router();
            console.log(`this - init`, this);
        },

        // тут можно писать свободный код для приложения
        main: function () {
            console.log("app.main");
        },

        // регистрация событий в браузере
        router: function () {
            console.log("app.event");
            
            var controller = new Controller(this);
            // this.computeForm = document.getElementById("compute-form");
            this.firstNum = document.getElementById("first-num");
            this.secondNum = document.getElementById("second-num");
            var button = document.getElementById("computeButton");
            
            button.addEventListener('click', sendToController);
            function sendToController () {
                controller.buttonClick();
            }

            console.log(`this - router`, this);
        }
    }

    app.init();

    

})();