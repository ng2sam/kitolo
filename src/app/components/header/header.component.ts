import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed: boolean = true;
  constructor() { }

  ngOnInit() {
  }

 public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
}

}
