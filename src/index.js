const v1 = require('uuid').v1;

module.exports = {
    sayHello: function(name='you'){
        return `hello ${name}!`
    },

    iden: function(){
        return v1() + 1;
    },

    sayBye: function(){
        return 'Bye bye'
    },

    sleep: function(time){
        console.log(`sleep for ${time} minutes`)
        return 'zzz'
    }
}