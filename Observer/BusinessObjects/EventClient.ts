module Patterns.BusinessObjects {

    export class EventClient implements Patterns.Interfaces.IObserver {

        private _myId: number = 0;
        static NextId: number = 1;

        constructor() {
            this._myId = EventClient.NextId++;
        }

        public ReceiveNotification(theEvent: string) {
            console.log("Event Client [" + this._myId + "], Received a message:", theEvent);
        }

    }
}