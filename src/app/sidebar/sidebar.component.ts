import { Component, Output, EventEmitter, ViewChild, inject} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Auth } from '@angular/fire/auth';
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

  public auth = inject(Auth);
  searchQuery: string = '';
  isCollapsed = true; // Déclaration de la propriété isCollapsed
  isMobile = false; // Déclaration de la propriété isMobile

  constructor(private youtubeService: ApiYoutubeService, private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    // Logique pour basculer le menu
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
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

  disconnect() {
    this.auth.signOut();
  }
}
