import { Component,OnInit } from '@angular/core';
import { Content } from './form/ConfigItems/Content';
import { FormConfig} from './form/ConfigItems/form-config';
import { Input } from './form/ConfigItems/ContentElement/Input';
import { Checkbox } from './form/ConfigItems/ContentElement/checkbox';
import { Textarea } from './form/ConfigItems/ContentElement/Textarea';
import { Radio } from './form/ConfigItems/ContentElement/Radio';
import { Select } from './form/ConfigItems/ContentElement/Select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  formConfiguration : FormConfig;
  
  ngOnInit() {
    let content1 =  new Input("text","ForName","Name","Enter nome here","IdName");
    let content2 =  new Input("text","ForLastName","LastName","Enter Last Name here","IdLastName");
    let content3 =  new Input("email","ForEmail","Email","Enter your Email here","IdMail");
    let content4 =  new Input("password","ForPassword","Password","Enter your Password Here","IdPass");
    let content5 = new Checkbox("Remember me","Remember","ChkbxClass");
    let content6 = new Textarea("forValue","Comment here",5,"IDTextArea");
    let content7 = new Radio("gender","Man","Man",true,"GenderClass");
    let content8 = new Radio("gender","Woman","Woman",true,"GenderClass");
    let content9 = new Radio("gender","Girl","Girl",true,"GenderClass");
    let content10 = new Radio("gender","Boy","Boy",true,"GenderClass");
    let content11 = new Select(true,"Choose Number","SelectNumber","idSlct",["1","2","3","4","5","6","7"]);
    let content12 = new Select(false,"Choose Number","SelectNumber","idSlct",["1","2","3","4","5","6","7"]);

    
    let contents = [content1,content2,content3,content4,content5,content6,content7,content8,content9,content10,content11,content12];
    this.formConfiguration =  new FormConfig("BasicForm", contents, "Animation : any");
    console.log(content1);
  }
}
