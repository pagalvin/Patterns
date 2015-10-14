module Patterns.Interfaces {

    export interface IObservable {
        RegisterObserver(Observer: Patterns.Interfaces.IObserver);
        RemoveObserver(Observer: Patterns.Interfaces.IObserver);
        NotifyObservers();
    }
}
