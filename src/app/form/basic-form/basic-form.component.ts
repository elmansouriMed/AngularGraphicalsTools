import { Component, OnInit,Input } from '@angular/core';
import { FormConfig } from '../ConfigItems/form-config';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  @Input()
  formconfig: FormConfig;
  type : String;
  constructor() { }

  ngOnInit() {
    this.formconfig.contents.forEach(element => {
      console.log(element.name);
      console.log(element.desc);
    });
  }

}
