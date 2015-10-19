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

    var scoreServer: bo.ScoreDataServer;
    var scoreClient1: bo.ScoreDataClient;
    var scoreClient2: bo.ScoreDataClient;
    var scoreClient3: bo.ScoreDataClient;

    scoreServer = new bo.ScoreDataServer(1, 15, 100, 23, 999, 56);
    scoreClient1 = new bo.ScoreDataClient();
    scoreClient2 = new bo.ScoreDataClient();
    scoreClient3 = new bo.ScoreDataClient();

    scoreServer.RegisterObserver(scoreClient1);
    scoreServer.RegisterObserver(scoreClient2);
    scoreServer.RegisterObserver(scoreClient3);

    scoreServer.NotifyObservers();

    scoreServer.RemoveObserver(scoreClient1);

    scoreServer.NotifyObservers();

    var eventServer: bo.EventPublisher;
    var eventClient1: bo.EventClient;
    var eventClient2: bo.EventClient;
    var eventClient3: bo.EventClient;

    eventServer = new bo.EventPublisher();
    eventClient1 = new bo.EventClient()
    eventClient2 = new bo.EventClient()
    eventClient3 = new bo.EventClient()

    eventServer.RegisterObserver(eventClient1);
    eventServer.RegisterObserver(eventClient2);
    eventServer.RegisterObserver(eventClient3);

    eventServer.NotifyObservers();

    eventServer.RemoveObserver(eventClient1);

    eventServer.NotifyObservers();

}