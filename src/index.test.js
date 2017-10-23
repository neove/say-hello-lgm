const  sayHelloLgm = require('./index')

describe('say-hello-name', () => {
    it('should say hello if call sayHello', () => {
        expect(sayHelloLgm.sayHello()).toBe('hello you!')
    })

    it('should say hello [name] if called sayHello with name passed', () => {
        expect(sayHelloLgm.sayHello('lgm')).toBe(`hello lgm!`)
    })

    it('should return zzz if called sleep', () => {
        expect(sayHelloLgm.sleep()).toBe('zzz');
    })
})