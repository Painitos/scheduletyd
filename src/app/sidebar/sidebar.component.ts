import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiYoutubeService } from '../api-youtube.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() latestActivitiesLoaded = new EventEmitter<any>(); // Événement pour émettre les dernières activités
  @ViewChild(MatSidenav) sidenav!: MatSidenav; // Référence à MatSidenav

  searchQuery: string = '';
  isCollapsed = true; // Déclaration de la propriété isCollapsed
  isMobile = false; // Déclaration de la propriété isMobile

  constructor(private youtubeService: ApiYoutubeService) {}

  toggleMenu() {
    // Logique pour basculer le menu
    if (this.sidenav) {
      this.sidenav.toggle(); // Basculer l'état du menu
    }
  }
  search() {
    if (this.searchQuery.trim() === '') {
      return; // Ne rien faire si la recherche est vide
    }

    // Appeler le service pour rechercher le nom YouTube
    this.youtubeService.getChannelId(this.searchQuery).subscribe((data: any) => {
      const channelId = data.items[0].id; // Supposons que le premier résultat est le bon
      // Appeler le service pour récupérer les dernières activités en utilisant le channelId
      this.youtubeService.getLatestVideos(channelId).subscribe((videos: any) => {
        // Émettre les dernières activités vers le composant parent (AppComponent)
        this.latestActivitiesLoaded.emit(videos.items);
      });
    });
  }
}
