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
  @ViewChild(MatSidenav) sidenav!: MatSidenav; // Référence à MatSidenav

  public auth = inject(Auth);
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

  disconnect() {
    this.auth.signOut();
  }
}
