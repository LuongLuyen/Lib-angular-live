import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonW,Button1,Button2,Button3,Button4,Button5,Button6,Button7,Button8,Button9,Button10,Button11,Button12,Button13,Button14,Button15,Button16} from 'luongluyen/lib/btn'
import {ComponentSearch,ComponentSearch1,ComponentSearch2,ComponentSearch3} from 'luongluyen/lib/search'
import {Card1,Card2,Card3} from 'luongluyen/lib/card'
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
  buttons: any[]=[
    {name:ButtonW,template:ButtonW("ButtonW")},
    {name:Button1,template:Button1("Button1")},
    {name:Button2,template:Button2("Button2")},
    {name:Button3,template:Button3("Button3")},
    {name:Button4,template:Button4("Button4")},
    {name:Button5,template:Button5("Button5")},
    {name:Button6,template:Button6("Button6")},
    {name:Button7,template:Button7("Button7")},
    {name:Button8,template:Button8("Button8")},
    {name:Button9,template:Button9("Button9")},
    {name:Button10,template:Button10("Button10")},
    {name:Button11,template:Button11("Button11")},
    {name:Button12,template:Button12("Button12")},
    {name:Button13,template:Button13("Button13")},
    {name:Button14,template:Button14("Button14")},
    {name:Button15,template:Button15("Button15")},
    {name:Button16,template:Button16("Button16")},
  ]
  componentSearchs:any[]=[
    {name:ComponentSearch,template:ComponentSearch(this.api)},
    {name:ComponentSearch1,template:ComponentSearch1(this.api)},
    {name:ComponentSearch2,template:ComponentSearch2(this.api)},
    {name:ComponentSearch3,template:ComponentSearch3(this.api)},
  ]
   data:object={
    id:"2",
    name:"Áo nam",
    named:"Thời trang nam",
    description:"Áo thun .áo phông tay lỡ form rộng chất cotton dày đẹp mẫu tổng hợp",
    price :"399.000 đ",
    colors:`["blue","red","green","orange","black"]`,// ["blue","red","green","orange","black","white","yellow","pink","beige","brown","gray","purple"]
    sizes :`["7","8","9","10","11"]`//1->100
}
  cards:any[]=[
    {name:Card1,template:Card1("")},
    {name:Card2,template:Card2("")},
    {name:Card3,template:Card3(this.data)},
  ]
  test:any;

  ngOnInit() {
    this.buttons.forEach((button:any)=>{
      button.name =this.sanitizer.bypassSecurityTrustHtml(button.template)
    })
    this.componentSearchs.forEach((search:any)=>{
      search.name =this.sanitizer.bypassSecurityTrustHtml(search.template)
    })
    this.cards.forEach((card:any)=>{
      card.name =this.sanitizer.bypassSecurityTrustHtml(card.template)
    })
    this.test=this.sanitizer.bypassSecurityTrustHtml(
      ''
    )
  }
}