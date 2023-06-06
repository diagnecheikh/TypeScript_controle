export interface IListener {
    mettreAJour(
        temperature: number,
        humidité: number,
        mesures: Array<number>
    ): void;
}