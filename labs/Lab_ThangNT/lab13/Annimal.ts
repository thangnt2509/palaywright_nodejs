export class Annimal{
    protected name: string;
    protected speed: number;

    constructor(name: string, speed: number){
        this.name = name;
        this.speed = speed;
    }
    
    getName(): string{
        return this.name;
    }

    getSpeed(): number{
        return this.speed;
    }

}