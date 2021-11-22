import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-people',
  templateUrl: './descripcion-people.page.html',
  styleUrls: ['./descripcion-people.page.scss'],
})
export class DescripcionPeoplePage implements OnInit {

  people:any;
  
  constructor(private miActRou1:ActivatedRoute, private miSwapiServ1:SwapiService) { }

  ngOnInit() {
    this.miActRou1.paramMap.subscribe((params)=>{
      let id=params.get('id');
      console.log(id);
    this.people=this.miSwapiServ1.getSwapi(`people/${id}`).subscribe(data =>{
      this.people = data;
      console.log(data);  
    });
    
    });
  }

}
