module Patterns.BusinessObjects {

    export class ScoreDataServer extends BasePublisher {

        private _allScores: number[];
        
        constructor(...scores: number[]) {

            super();

            this._allScores = scores;
        }

        public NotifyObservers() {
            for (let i = 0; i < this._observers.length; i++) {
                this._observers[i].ReceiveNotification(this._allScores);
            }
        }

    }

}