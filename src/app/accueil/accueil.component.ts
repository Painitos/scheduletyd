import { Component, OnInit } from '@angular/core';
import { ApiYoutubeService } from '../api-youtube.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  alderiateActivities: any[] = [];
  alderiateVideos: any[] = [];
  latestActivities: any[] = []; // Déclaration de la propriété latestActivities


  constructor(private youtubeService: ApiYoutubeService) { }

  ngOnInit(): void {
    this.getAlderiateActivities();
    this.getAlderiateVideos();
  }

  getAlderiateActivities() {
    this.youtubeService.getActivities('UCB3Vqxt5hVRKKWivG_OI4DA').subscribe((data: any) => {
      this.alderiateActivities = data.items;
    });
  }

  getAlderiateVideos() {
    this.youtubeService.getLatestVideos('UCB3Vqxt5hVRKKWivG_OI4DA', 5).subscribe((data: any) => {
      this.alderiateVideos = data.items;
    });
  }
  
  onLatestActivitiesLoaded(activities: any[]) {
    this.latestActivities = activities;
  }
}
