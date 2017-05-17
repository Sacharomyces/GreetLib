//@ts-check

(function (global, $) {

    var Greeter = function (firstname, lastname, language) {
        return new Greeter.init(firstname, lastname, language);
    };

    var supportedLanguages = ['en','pl'];

    var greetings = {

        en: "Hello",
        pl: "Cześć"
        
    };

    var formalGreetings ={

        en: "Greetings",
        pl: "Dzień dobry"
    };

    var msg;

    Greeter.prototype = {

        fullname: function(){
            return this.firstname+" "+this.lastname;
        },

        validateLang: function(){
           if (supportedLanguages.indexOf(this.language) === -1)
           {
               throw "Invalid language";
           }
        },

        informalGreeting: function(){
            return greetings[this.language]+" "+this.firstname+"!";

        },

        formalGreeting: function(){
            return formalGreetings[this.language]+" "+this.fullname()+".";
        },

        greet: function(formal){

            
            if (formal)
            {
                this.msg = this.formalGreeting();
            }
            else
            {
                this.msg = this.informalGreeting();
            }

            return this;
        },

        setLang: function(lang){
            this.language = lang;
            this.validateLang();

            return this;
        },


        JQGreeting: function(selector,formal){

            if (!$) {
                throw "jQuery not loaded";
            }

            if(!selector){
                throw "selector is not selected";
            }

            this.greet(formal);

            $(selector).html(this.msg);

            return this;
        }

    };

    Greeter.init = function (firstname, lastname, language) {

        var self = this;

        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "pl";

        self.validateLang();
    }

    Greeter.init.prototype = Greeter.prototype;

    global.Greetr = global.G$ = Greeter;



}(window, jQuery));

