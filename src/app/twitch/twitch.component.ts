import { Component, OnInit, inject } from '@angular/core';
import { ApiTwitchService } from '../api-twitch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, combineLatest, forkJoin, switchMap } from 'rxjs';
import { Auth, authState, user } from '@angular/fire/auth';
import { doc, setDoc, Firestore, getFirestore, addDoc, collection, getDoc, query, where, getDocs, } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrl: './twitch.component.css'
})
export class TwitchComponent implements OnInit{
  private app = initializeApp({"projectId":"projettest-ilyes","appId":"1:485658576873:web:696a98ffef24d15bf86d78","storageBucket":"projettest-ilyes.appspot.com","apiKey":"AIzaSyBEJrDv8meilC9KXBEc0PRwq41rDBATCrI","authDomain":"projettest-ilyes.firebaseapp.com","messagingSenderId":"485658576873"});
  private db = getFirestore(this.app);
  private auth = inject(Auth);
  private user = user(this.auth);

  private access_token : string = sessionStorage.getItem('access_token') || "" ;
  private client_id : string = "";
  private user_id : string = "";
  public followed_channels : any = [];

  constructor(public apiTwitchService : ApiTwitchService, private route: ActivatedRoute,private router: Router ) { }

  ngOnInit() {
    forkJoin([this.GetToken()]).subscribe((data) => {
      console.log(this.access_token);
      this.GetChannels();
    });
  }

  private GetChannels() {
    const access_token = sessionStorage.getItem('access_token') || "";
    this.apiTwitchService.validateToken(this.access_token).pipe(
    switchMap((data:any) => {

      this.client_id = data.client_id;
      this.user_id = data.user_id;
      sessionStorage.setItem('client_id', this.client_id);
      return this.apiTwitchService.GetFollowedChannels(access_token, data.client_id, data.user_id);
    })).subscribe((data : any) => {
    this.followed_channels = data.data;
    this.followed_channels.forEach((channel: { broadcaster_login: string; is_live: string; profile_image_url : string;})  => {
      this.apiTwitchService.GetLiveStreams(access_token, this.client_id, channel.broadcaster_login).subscribe((data : any) => {
        if (data.data.length > 0){
          channel.is_live = "🔴";
        }else{
          channel.is_live = "";
        }
        this.apiTwitchService.GetUserInfos(access_token, this.client_id, channel.broadcaster_login).subscribe((data : any) => {
          channel.profile_image_url = data.data[0].profile_image_url;
        });
      });
    });
  });
  }

  private GetToken () : Array<any> {
    this.user.subscribe((user) => {
      if (user == null) {
        this.router.navigate(['/connexion']);
      }
    });

    this.route.queryParams.subscribe(params => {
      if (params['access_token'] != null){
        this.access_token = params['access_token'];
        sessionStorage.setItem('access_token', this.access_token);
      }else{
        this.user.subscribe((user) => {
            this.user_id = user?.uid || "";
            getDocs(query(collection(this.db, "Twitch Tokens"), where("user_id", "==", this.user_id))).then((querySnapshot) => {
            querySnapshot.empty ? addDoc(collection(this.db, "Twitch Tokens"), {
              user_id: this.user_id,
              access_token: this.access_token
            }) : querySnapshot.forEach((doc) => {
              this.user_id = doc.data()['user_id'];
              this.access_token = doc.data()['access_token'];
              sessionStorage.setItem('access_token', this.access_token);
            });
        });
        });
    }
    });
    if (this.router.url.indexOf("#") != -1){
      window.location.href = this.router.url.replace("#", "?");
    }
    return new Array(1);
  }








}
