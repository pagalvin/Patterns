module Patterns.BusinessObjects {

    // Abstract classes came into the language with v1.6 around 10/2015
    export abstract class AbstractPublisher implements Patterns.Interfaces.IObservable {

        // My "infrastructure" properties
        protected _observers: Patterns.Interfaces.IObserver[];

        constructor() {
            this._observers = [];
        }

        // This must be implemented by the subclass.
        public abstract NotifyObservers();


        /**************************************************************************/
        /**************************************************************************/
        /* The RegisterObserver and RemoveObserver are fully implemented.         */
        /**************************************************************************/
        /**************************************************************************/

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

    }

}