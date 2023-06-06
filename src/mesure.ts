// On veut pouvoir afficher la journalisation sur la console sous la forme suivante (Le numéro entre crochet est le numéro de la mesure) :
// [1] Température : 12°C / Humidité : 11 %
// [2] Température : 13°C / Humidité : 10 %
// [3] Température : 14°C / Humidité : 9 %
// [4] Température : 15°C / Humidité : 8 %
import { IListener } from "./IListener";

export class Journalisation implements IListener {
    private tabTemperature: Array<number>;
    private tabHumidité: Array<number>;
    
    constructor() {
        this.tabTemperature = [];
        this.tabHumidité = [];
    }
    
    public mettreAJour(temperature: number, humidité: number): void {
        this.tabTemperature.push(temperature);
        this.tabHumidité.push(humidité);
        console.log(`[${this.tabTemperature.length}] Température : ${temperature}°C / Humidité : ${humidité}%`);
    }
    }