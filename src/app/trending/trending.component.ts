
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router, RouterLinkActive } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  trendingData:any;
  constructor(private api :ApiService,private router :Router) { }

  ngOnInit(): void {
    this.getTrendingData();

  }

  getTrendingData(){
    this.api.getTrendingCurrency("INR").subscribe(res=>{
      console.log(res);
      this.trendingData=res;

    })
  }

  openCoinById(event:any){

    this.router.navigate(['coin-detail',event.id])



  }





}
