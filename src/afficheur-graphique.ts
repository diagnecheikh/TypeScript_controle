import * as asciichart from "asciichart";
import { IListener } from "./IListener";

export class AfficheurGraphique implements IListener {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;
  private tabMesures: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
    this.tabMesures = [];
  }

  public mettreAJour(temperature: number, humidité: number, mesures: []): void {
    this.tabTemperature.push(temperature);
    this.tabHumidité.push(humidité);
    this.tabMesures.push(mesures.length);
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidité]));
  }
}