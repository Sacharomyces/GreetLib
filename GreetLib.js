//@ts-check

(function (global, $) {

    var Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supprotedLanguages = ['en','pl'];

    var greetings = {

        en: "Hello",
        pl: "Cześć"
        
    };

    var formalGreetings ={

        en: "Greetings",
        pl: "Dzień dobry"
    };

    var msg;

    Greetr.prototype = {

        fullname: function(){
            return this.firstname+" "+this.lastname;
        },

        validateLang: function(){
           if (supprotedLanguages.indexOf(this.language) === -1)
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

    Greetr.init = function (firstname, lastname, language) {

        var self = this;

        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "pl";
        self.msg;

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

    this.validateLang();

}(window, jQuery));

