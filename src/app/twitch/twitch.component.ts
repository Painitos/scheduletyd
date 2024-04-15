import { Component, OnInit } from '@angular/core';
import { ApiTwitchService } from '../api-twitch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrl: './twitch.component.css'
})
export class TwitchComponent implements OnInit{
  access_token : string = "" ;

  constructor(public apiTwithService : ApiTwitchService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.access_token = params['access_token'];
    });
    if (this.router.url.indexOf("#") != -1){
      window.location.href = this.router.url.replace("#", "?");
    }
    console.log(this.access_token);
  }



}
