module Patterns.BusinessObjects {

    export class EventPublisher extends AbstractPublisher {

        constructor() {

            super();

        }

        // This overrides the empty NotifyObservers() in the base class.
        public NotifyObservers() {

            for (let i = 0; i < this._observers.length; i++) {
                this._observers[i].ReceiveNotification("A general event for demo purposes.");
            }
        }

    }

}