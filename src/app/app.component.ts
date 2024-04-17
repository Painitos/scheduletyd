import { Component, OnInit, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private auth = inject(Auth);
  private user = user(this.auth);
  public DisplaySidebar : boolean = true;
  title = 'scheduletyd';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.user.subscribe((user) => {
        if (!user) {
          this.DisplaySidebar = false;
        }else{
          this.DisplaySidebar = true;
        }

      });
    });

  }



}
