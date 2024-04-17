import { Component, OnInit } from '@angular/core';
import { ApiYoutubeService } from '../api-youtube.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  searchQuery: string = '';
  YoutuberName: string = '';
  LatestsVideos : any[] = [];
  Searched: boolean = false;


  constructor(private youtubeService: ApiYoutubeService) { }

  search() {
    if (this.searchQuery.trim() === '') {
      return; // Ne rien faire si la recherche est vide
    }
    this.YoutuberName = this.searchQuery;

    // Appeler le service pour rechercher le nom YouTube
    this.youtubeService.getChannelId(this.searchQuery).subscribe((data: any) => {
      if (data.pageInfo.totalResults != 0) {
        const channelId = data.items[0].id; // Supposons que le premier résultat est le bon
        // Appeler le service pour récupérer les dernières activités en utilisant le channelId
        this.youtubeService.getLatestVideos(channelId,5).subscribe((videos: any) => {
          // Émettre les dernières activités vers le composant parent (AppComponent)
          this.LatestsVideos = videos.items;
          this.Searched = true;
        });
      }else{
        console.log('Aucun résultat trouvé');
        this.Searched = false;
      }
    });
  }
}
