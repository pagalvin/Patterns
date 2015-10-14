module Patterns.Main {

    import bo = Patterns.BusinessObjects;

    var weatherSubject: bo.WeatherDataServer;
    var weatherClient1: bo.WeatherDataClient;
    var weatherClient2: bo.WeatherDataClient;
    var weatherClient3: bo.WeatherDataClient;

    weatherSubject = new bo.WeatherDataServer();

    weatherClient1 = new bo.WeatherDataClient(weatherSubject);
    weatherClient2 = new bo.WeatherDataClient(weatherSubject);
    weatherClient3 = new bo.WeatherDataClient(weatherSubject);

    weatherSubject.RegisterObserver(weatherClient1);
    weatherSubject.RegisterObserver(weatherClient2);
    weatherSubject.RegisterObserver(weatherClient3);


    weatherSubject.NotifyObservers();

    weatherSubject.RemoveObserver(weatherClient2);

    weatherSubject.NotifyObservers();


}