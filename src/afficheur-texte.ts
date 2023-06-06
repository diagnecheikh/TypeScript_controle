import { IListener } from "./IListener";

export class AfficheurTexte implements IListener {
 
    public mettreAJour (temperature: number, humidité: number, mesures: []): void {
    console.log(`[ ${mesures} ] Température : ${temperature}°C / Humidité : ${humidité} %`)
   // [ 1 ] Température : 12°C / Humidité : 11 %
    // console.log(`${[temperature]} Temprature : °C\n${humidité}`)
    
  }
}
