import { Polyomino } from "./polyomino";

export class PolyominoType {
    type!: number;
    name!: string;
    items: Polyomino[] = [];

    loadFromObject(obj: any): PolyominoType {
        this.type = obj["type"];
        this.name = obj["name"];
        for(let item of obj["items"]) {
            console.log('Loading polyomino from object');
            console.log(item);
            this.items.push(new Polyomino().loadFromObject(item));
        }
        return this;
    }
}
