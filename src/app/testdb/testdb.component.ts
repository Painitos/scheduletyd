import { Component, OnInit, inject } from '@angular/core';
import { doc, onSnapshot, Firestore } from "@angular/fire/firestore";
import { ApiYoutubeService } from '../api-youtube.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrl: './testdb.component.css'
})
export class TestdbComponent implements OnInit {
  public db: Firestore = inject(Firestore);

  constructor(public apiservice: ApiYoutubeService) { }

  ngOnInit(): void { this.testdata(); 
  // this.apiservice.getChannelId("@AlderiateYoutube").subscribe((data) => {
  //   console.log(data);
  // } );
  this.apiservice.getChannelId("@AlderiateYoutube").pipe(
    switchMap((data:any)=>this.apiservice.getActivities(data.items[0].id)),

  ).subscribe((data) => {
    console.log(data);
  } );
}

  public testdata() {

    const unsub = onSnapshot(doc(this.db, "Test", "User"), (doc) => {
      console.log("Current data: ", doc.data());
    });
  } 
}
