module Patterns.BusinessObjects {

    export class BasePublisher implements Patterns.Interfaces.IObservable {

        // My "infrastructure" properties
        protected _observers: Patterns.Interfaces.IObserver[];

        constructor() {
            this._observers = [];
        }

        // Once registered, the observer will be notified of any changes in state.
        public RegisterObserver(theObserver: Patterns.Interfaces.IObserver): void {
            this._observers.push(theObserver);
        }

        // Give the observer a way to de-register
        public RemoveObserver(theObserver: Patterns.Interfaces.IObserver): void {

            for (let i = 0; i < this._observers.length; i++) {
                if (this._observers[i] === theObserver) {
                    this._observers.splice(i, 1);
                }
            }
        }

        // This is meant to be overriden by the sub-class
        public NotifyObservers() {
            alert("You should have overriden me.");
        }
    }

}