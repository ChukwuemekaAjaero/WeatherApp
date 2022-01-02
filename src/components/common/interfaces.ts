export interface Weather {
    id: number;
    date: Date;
    weatherStateName: WeatherStateName;
    weatherStateAbbreviation: WeatherStateAbbreviation;
    windSpeed: number;
    windDirection: number;
    windDirectionCompass: CompassPoint;
    currentTemperature: number;
    minTemperature: number;
    maxTemperature: number;
    isCelcius: boolean;
    airPressure: number;
    humidity: number;
    visibility: number;
}

type WeatherStateName =
    | "Snow"
    | "Sleet"
    | "Hail"
    | "Thunderstorm"
    | "Heavy Rain"
    | "Light Rain"
    | "Showers"
    | "Heavy Cloud"
    | "Light Cloud"
    | "Clear";

type WeatherStateAbbreviation =
    | "sn"
    | "sl"
    | "h"
    | "t"
    | "hr"
    | "lr"
    | "s"
    | "hc"
    | "ls"
    | "c";

type CompassPoint =
    | "N"
    | "E"
    | "W"
    | "S"
    | "NW"
    | "NE"
    | "SW"
    | "SE"
    | "NWN"
    | "NWW"
    | "SWS"
    | "SWW"
    | "NEE"
    | "NEN"
    | "SEE"
    | "SES";
