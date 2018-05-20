import { Content } from "../Content";

export class Radio extends Content {
    name : String;
    label : String;
    value : String;
    isInline : boolean;
    classe : String;
    constructor(name,label,value,isInline,classe){
        super("Radio");
        this.name = name;
        this.label = label;
        this.value = value;
        this.isInline = isInline;
        this.classe = classe;
    }

}