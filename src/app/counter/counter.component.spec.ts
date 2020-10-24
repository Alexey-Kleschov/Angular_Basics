import { FormBuilder } from '@angular/forms';
import { CounterComponent } from "./counter.component";

describe( 'counter component', () => { 

    let component: CounterComponent;

    beforeEach( () => {
        component = new CounterComponent( new FormBuilder());
    });

    //beforeAll, afterEach, afterAll

    it('should increment counter with 1', () => {
        component.increment();
        expect(component.counter).toBe(1);
    });

    it('should decrement counter with 1', () => {
        component.decrement();
        expect(component.counter).toBe(-1);
    });

    it('should increment value with event emitter', () => {
        let result = null;
        component.counterEmitter.subscribe( value => result = value);
        component.increment();
        expect(result).toBe(1);
    });

    //Forms

    it('should create form with 2 controls', () => {
        expect(component.form.contains('login')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('should mark login as valid if empty value', () => {
        const control = component.form.get('login');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

});