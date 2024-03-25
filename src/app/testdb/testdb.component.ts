import { Component, OnInit, inject } from '@angular/core';
import { doc, onSnapshot, Firestore } from "@angular/fire/firestore";


@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrl: './testdb.component.css'
})
export class TestdbComponent implements OnInit {
  public db: Firestore = inject(Firestore);

  constructor() { }

  ngOnInit(): void { this.testdata(); }

  public testdata() {

    const unsub = onSnapshot(doc(this.db, "Test", "User"), (doc) => {
      console.log("Current data: ", doc.data());
    });
  } 
}
