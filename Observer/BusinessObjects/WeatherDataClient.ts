module Patterns.BusinessObjects {

    export class WeatherDataClient implements Patterns.Interfaces.IObserver {

        private _subject: Patterns.Interfaces.IObservable;
        private _myId: number;

        static NextClientId: number = 0;

        constructor(mySubject: Patterns.Interfaces.IObservable) {

            this._subject = mySubject;
            this._myId = WeatherDataClient.NextClientId++;

        }

        public ReceiveNotification<T>(Message: string) {
            console.log("WeatherDataClient (" + this._myId + "): I received a notification:", Message);
        }

    }
}