import { Content } from "../Content";

export class Select extends Content {
    isOneSelectOrMultiple : boolean;
    forValue : String;
    label : String;
    id : String;
    values : String[];
    constructor(isOneSelectOrMultiple,label,forValue,id,Values){
        super("Select");
        this.isOneSelectOrMultiple = isOneSelectOrMultiple;
        this.label = label;
        this.forValue = forValue;
        this.id = id;
        this.values = Values;
    }

}