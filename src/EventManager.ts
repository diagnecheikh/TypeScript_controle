import { IListener } from "./IListener";

export class EventManager {
    private listeners: Array<IListener>;

    constructor() {
        this.listeners = new Array<IListener>();
    }

    public ajouterListener(listener: IListener): void {
        this.listeners.push(listener);
    }

 
    public notifier(temperature: number, humidité: number, mesures : number = 0): void {
        this.listeners.forEach((listener) => {
            listener.mettreAJour(temperature, humidité, [mesures + 1]);
        });
    }

   


}