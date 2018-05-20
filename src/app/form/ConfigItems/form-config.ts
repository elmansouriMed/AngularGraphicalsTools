import { Content } from "./Content";

export class FormConfig {
  type : String;
  contents : Array<Content>;
  animation : any;
 constructor(type,contens,animation){
     this.type = type;
     this.contents = contens;
     this.animation = animation;
 }
}
