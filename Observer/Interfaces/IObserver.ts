module Patterns.Interfaces {

    export interface IObserver {
        ReceiveNotification<T>(Message: T): void;
    }
}
