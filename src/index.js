import {v1} from 'uuid';

export default {
    sayHello: function(name='you'){
        alert(`hello ${name}!`)
    },

    iden: function(){
        return v1();
    },

    sayBye: function(){
        alert('Bye bye')
    }
}