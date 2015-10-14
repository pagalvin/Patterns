module Patterns.BusinessObjects {

    export class ScoreDataClient implements Patterns.Interfaces.IObserver {

        constructor() {

        }

        public ReceiveNotification(scores: number[]) {
            console.log("Recevied some scores:", scores);
        }

    }
}