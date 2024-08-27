import { Annimal } from "./Annimal";

export default class AnnimalManagement{
    getFastestAnnimal(annimalList: Annimal[]): Annimal{
        let fastestAnnimal: Annimal = annimalList[0];
        annimalList.forEach(annimal => {
            if(annimal.getSpeed() > fastestAnnimal.getSpeed()){
                fastestAnnimal = annimal;
            }
        })
        return fastestAnnimal;
    }
}