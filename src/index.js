import {v1} from 'uuid';

export default {
    sayHello: function(){
        alert('hello you!')
    },

    iden: function(){
        return v1();
    }
}