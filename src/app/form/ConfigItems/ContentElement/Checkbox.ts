import { Content } from "../Content";

export class Checkbox extends Content {
    label : String;
    value : String;
    classe : String;
    constructor(label,value,classe){
        super("Checkbox");
        this.label = label;
        this.value = value;
        this.classe = classe;
    }