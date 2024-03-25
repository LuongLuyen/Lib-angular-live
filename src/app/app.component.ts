import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonW,Button1,Button2,Button3,Button4,Button5,Button6,Button7,Button8,Button9,Button10,Button11,Button12,Button13,Button14,Button15,Button16} from 'luongluyen/lib/btn'
import {ComponentSearch,ComponentSearch1} from 'luongluyen/lib/search'
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import 'luongluyen/index.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  api: string ='http://localhost:5000/home-bong'
  title = 'TestLib';
  constructor(private sanitizer: DomSanitizer) { }
  ButtonW: any;
  Button1: any;
  Button2: any;
  Button3: any;
  Button4: any;
  Button5: any;
  Button6: any;
  Button7: any;
  Button8: any;
  Button9: any;
  Button10: any;
  Button11: any;
  Button12: any;
  Button13: any;
  Button14: any;
  Button15: any;
  Button16: any;
  ComponentSearch: any;
  ComponentSearch1: any;
  
  ngOnInit() {
    this.ButtonW = this.sanitizer.bypassSecurityTrustHtml(ButtonW("ButtonW"));
    this.Button1 = this.sanitizer.bypassSecurityTrustHtml(Button1("Button1"));
    this.Button2 = this.sanitizer.bypassSecurityTrustHtml(Button2("Button2"));
    this.Button3 = this.sanitizer.bypassSecurityTrustHtml(Button3("Button3"));
    this.Button4 = this.sanitizer.bypassSecurityTrustHtml(Button4("Button4"));
    this.Button5 = this.sanitizer.bypassSecurityTrustHtml(Button5("Button5"));
    this.Button6 = this.sanitizer.bypassSecurityTrustHtml(Button6("Button6"));
    this.Button7 = this.sanitizer.bypassSecurityTrustHtml(Button7("Button7"));
    this.Button8 = this.sanitizer.bypassSecurityTrustHtml(Button8("Button8"));
    this.Button9 = this.sanitizer.bypassSecurityTrustHtml(Button9("Button9"));
    this.Button10 = this.sanitizer.bypassSecurityTrustHtml(Button10("Button10"));
    this.Button11 = this.sanitizer.bypassSecurityTrustHtml(Button11("Button11"));
    this.Button12 = this.sanitizer.bypassSecurityTrustHtml(Button12("Button12"));
    this.Button13 = this.sanitizer.bypassSecurityTrustHtml(Button13("Button13"));
    this.Button14= this.sanitizer.bypassSecurityTrustHtml(Button14("Button14"));
    this.Button15= this.sanitizer.bypassSecurityTrustHtml(Button15("Button15"));
    this.Button16= this.sanitizer.bypassSecurityTrustHtml(Button16("Button16"));
    this.ComponentSearch = this.sanitizer.bypassSecurityTrustHtml(ComponentSearch(this.api));
    this.ComponentSearch1 = this.sanitizer.bypassSecurityTrustHtml(ComponentSearch1(this.api));
  }
}