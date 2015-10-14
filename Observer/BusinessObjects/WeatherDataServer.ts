module Patterns.BusinessObjects {

    export class WeatherDataServer implements Patterns.Interfaces.IObservable {

        // My "infrastructure" properties
        private _observers: Patterns.Interfaces.IObserver[];

        // My "data" properties
        private _temp: number;
        private _humidity: number;
        private _pressure: number;

        constructor() {

            // Initialize the array of potential observers.
            this._observers = [];

            this._temp = 90;
            this._pressure = 100;
            this._humidity = 22;

        }

        // Once registered, the observer will be notified of any changes in state.
        public RegisterObserver(theObserver: Patterns.Interfaces.IObserver): void {
            this._observers.push(theObserver);
        }

        // Give the observer a way to de-register
        public RemoveObserver(theObserver: Patterns.Interfaces.IObserver): void {

            for (let i = 0; i < this._observers.length; i++) {
                if (this._observers[i] === theObserver) {
                    this._observers.splice(i,1);
                }
            }
        }

        // Notify all the observers
        public NotifyObservers() {
            for (let i = 0; i < this._observers.length; i++) {

                // NOTE: this should pass the actual weather data to the client but this is a simplistic example.
                this._observers[i].ReceiveNotification("I have some new weather data for you.");
            }
        }

    }
}