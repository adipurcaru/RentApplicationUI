import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {

  sportSelectat: string;
  orasSelectat: string;
  terenuriGasite: any;

  constructor(private route: ActivatedRoute, private service: UniversalService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.sportSelectat = this.route.snapshot.paramMap.get('sport');
        this.orasSelectat = this.route.snapshot.paramMap.get('oras');
      }
    )

    this.service.searchTerenByOrasAndSport(this.sportSelectat, this.orasSelectat).subscribe(
      terenuri => {
        console.log(terenuri);
        this.terenuriGasite = terenuri;
      }
    )
  }

}
