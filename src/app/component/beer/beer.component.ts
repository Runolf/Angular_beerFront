import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from 'src/app/service/beer-service.service';

@Component({
  selector: 'beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(private beerService: BeerServiceService) { }
  data:any; 
  oneBeer: any;
  ngOnInit(): void {
    
    this.beerService.getBeers().subscribe((response) => {
      console.log(response);
      this.data = response;
    });

    this.beerService.getOneBeer().subscribe(respone => 
        this.oneBeer = respone
      );

  }

}
