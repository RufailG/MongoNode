import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-ae745964-5a1f-4938-be5a-39844caa4d8e.ws-eu01.gitpod.io/movie");
    this.obs.subscribe(this.getData);
  }



  getData = (data) => {
    this.results = data;
  }


  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    if (urltoSanitize ==undefined)
    {
      return false
    }
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize)
  }
}
