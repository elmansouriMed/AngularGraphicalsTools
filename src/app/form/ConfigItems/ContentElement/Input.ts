import { Content } from "../Content";

export class Input extends Content {
    forValue : String;
    type : String;
    label : String;
    placeholder : String;
    id : String;
    constructor(type,forValue,label,placeholder,id){
        super("Input");
        this.forValue = forValue;
        this.type = type;
        this.placeholder = placeholder;
        this.label = label;
        this.id = id;
    }
}