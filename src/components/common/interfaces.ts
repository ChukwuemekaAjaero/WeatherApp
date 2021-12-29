export interface Weather {
    currentTemperature: number;
    minTemperature: number;
    maxTemperature: number;
    isCelcius: boolean;
    weatherType: string;
    date: Date;
    windStatus?: string;
}