import { EventManager } from "./EventManager";

export class StationMétéo {
  private _temperature: number;
  private _humidité: number;
  private _mesures: Array<number>;
  private _eventManager: EventManager;


  constructor(temperature = 0, humidité = 15, mesures = [0]) {
    this._temperature = temperature;
    this._humidité = humidité;
    this._mesures = mesures;
    this._eventManager = new EventManager();
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
    this.toString();
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
    this.toString();
  }

  public get eventManager(): EventManager {
    return this._eventManager;
  }

  public set eventManager(eventManager: EventManager) {
    this._eventManager = eventManager;
  }

  public get mesures(): Array<number> {
    return this._mesures;
  }

  public set mesures(mesures: Array<number>) {
    this._mesures = mesures;
  }
  
  public toString(): string {
    return `Température : ${this._temperature}°C / Humidité : ${this._humidité}%`;
  }

}
