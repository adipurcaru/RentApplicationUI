import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public lat: number = 44.4301091;
  public lng: number = 26.015287;
  public zoom: number = 12;

  constructor() { }

  ngOnInit() { }

  subscribe(){ }

}