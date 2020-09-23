import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.scss']
})
export class FieldSearchComponent implements OnInit {

  
  public sportSelectat;
  public orasSelectat;
  //public orase: string[] = ['Bucuresti', 'Iasi', 'Slatina'];
  public sports: any;
  public orase: any;
  public terenuriGasite: any;
  number: BigInteger;
  public teren_id;
  
  constructor(private router: Router, private service: UniversalService) { }

  ngOnInit() {
   
    this.service.getSports().subscribe(
      sports => {
        this.sports = sports;
      }
    )

    this.service.getCities().subscribe(
      cities => {
        this.orase = cities;
      }
    )
  }

  searchBySportAndOras(){
   
    this.service.searchTerenByOrasAndSport(this.orasSelectat, this.sportSelectat).subscribe(
      terenuri =>{
        this.terenuriGasite = terenuri;
        this.teren_id = this.terenuriGasite.sport_id;
        console.log(this.terenuriGasite);
        this.router.navigate(['terenuri/',this.orasSelectat, this.sportSelectat]);
      }
    )
  }

}

export interface Teren {
  id: BigInteger;
  nume: string;
  adresa: string;
  sport_id;
  pret: BigInteger;
}
