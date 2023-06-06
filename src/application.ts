import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
import { Journalisation } from "./mesure";


function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const aff3 = new Journalisation();
  const stationMeteo = new StationMétéo(10);
  stationMeteo.eventManager.ajouterListener(aff);
  stationMeteo.eventManager.ajouterListener(aff2);
  stationMeteo.eventManager.ajouterListener(aff3);
  
  console.log("Appuyez sur entrée pour le prochain affichage");
  rs.question();

  stationMeteo.humidité++;
  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité--;
    stationMeteo.temperature += 2;
  }

  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité++;
    stationMeteo.temperature -= 3;
  }
  
  console.log("Appuyez sur entrée pour le prochain affichage");
  rs.question();

  stationMeteo.humidité = 50;
  stationMeteo.temperature = 20;
  stationMeteo.mesures = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité++;
    stationMeteo.temperature--;
  }

  
}

main();
