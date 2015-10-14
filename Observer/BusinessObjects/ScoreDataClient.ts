module Patterns.BusinessObjects {

    export class ScoreDataClient implements Patterns.Interfaces.IObserver {

        private _myId: number = 0;
        static NextId: number = 1;

        constructor() {
            this._myId = ScoreDataClient.NextId++;
        }

        public ReceiveNotification(scores: number[]) {
            console.log("Score Client [" + this._myId + "], Received some scores:", scores);
        }

    }
}