import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-custom-map',
  templateUrl: './custom-map.component.html',
  styleUrls: ['./custom-map.component.scss']
})
export class CustomMapComponent implements OnInit, OnChanges {

  @ViewChild("map")
  public mapElement: ElementRef;

  @Input()
  public appId: any;
  @Input()
  public appCode: any;

  @Input()
  public start: any;
  @Input()
  public finish: any;
  @Input()
  public height: any;
  @Input()
  public width: any;

  public directions: any;
  private platform: any;
  private router: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.platform = new H.service.Platform({
      "app_id": this.appId,
      "app_code": this.appCode
    });
    this.directions = [];
  }

  ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.mapElement = new H.map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 4,
        center: {lat: "37.0902", lng: "-95.7129"}
      }
    );
  }

}
