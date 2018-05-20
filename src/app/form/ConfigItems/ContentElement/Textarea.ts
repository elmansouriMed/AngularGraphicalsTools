import { Content } from "../Content";

export class Textarea extends Content {
    forValue : String;
    label : String;
    rows : Number;
    id : String;
    constructor(forValue,label,rows,id){
        super("Textarea");
        this.forValue = forValue;
        this.label = label;
        this.rows = rows;
        this.id = id;
    }
}