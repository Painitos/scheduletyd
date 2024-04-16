import { Component, OnInit, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  private auth = inject(Auth);
  private user = user(this.auth);

  constructor(private router: Router ) { }

  ngOnInit() : void{
    this.user.subscribe((user) => {
      if (user == null) {
        this.router.navigate(['/connexion']);
      }
    });
  }

close(arg0: string) {
throw new Error('Method not implemented.');
}
}

