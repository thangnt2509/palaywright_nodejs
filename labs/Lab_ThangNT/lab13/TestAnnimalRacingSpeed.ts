import { Annimal } from "./Annimal";
import AnnimalManagement from "./AnnimalManagement";

let animalManagement: AnnimalManagement = new AnnimalManagement();

let horse: Annimal = new Annimal("Horse", Math.floor(Math.random() * 75) + 1);
let tiger: Annimal = new Annimal("Tiger", Math.floor(Math.random() * 100) + 1);
let dog: Annimal = new Annimal("Dog", Math.floor(Math.random() * 60) + 1);

console.log("Horse speed: " + horse.getSpeed());
console.log("Tiger speed: " + tiger.getSpeed());
console.log("Dog speed: " + dog.getSpeed());

let fastetAnnimal: Annimal = animalManagement.getFastestAnnimal([horse, tiger, dog]);

console.log("Winner is " + fastetAnnimal.getName() + ", with speed " + fastetAnnimal.getSpeed()); 
