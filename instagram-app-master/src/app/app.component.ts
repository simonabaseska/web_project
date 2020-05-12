import { Component } from '@angular/core';
import { FeitgramServiceService } from './feitgram-service.service';
import { PostDetails, addComment, gg } from './model/postDetails';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  thePosts: PostDetails[] = [];
  flag = true;

    // * inicijaliziranje na postovite preku service
  constructor(public apiService: FeitgramServiceService) {
    this.apiService.getPosts().subscribe((recievedPosts) => {
      this.thePosts = recievedPosts;
    });
  }

  ngInit() { }

  onClickSubmit() { // search in toolbar
    var gt = (<HTMLFormElement>document.getElementById("searchbar")).value.toLowerCase();
    var posts = this.thePosts;
    window.location.hash = '';
    var empty = gt.split(' ');
    if(empty[0] == "")     //nisto da ne se slucuva koga ne e vnesena vrednost
    {
      return ;
    }

    for(var i = 0; i<this.thePosts.length; i++)
    {
      if(this.thePosts[i].username.toLowerCase() == gt)       //prebaruvanje na usernames od postovite
      {
        return window.location.hash = (this.thePosts[i].id).toString();
      }
      for(var j = 0; j<posts[i].comments.length;j++)
        {
          if(posts[i].comments[j].username.toLowerCase() == gt)
          {
            return window.location.hash = (this.thePosts[i].id).toString();       //prebaruvanje na usernames od komentarite
          }
        }
    }
    alert('We couldn\'t find "' + gt + '" on this webpage, sorry for the inconvenience!');

    console.log(gt);
  }

  checkbox1() {  // DarkMode
    document.getElementById('mainHTML').classList.toggle('dark');     // menjanje na celata pozadina
    const d = document.getElementsByClassName('example-card');        // individualnite postovi
    const dd = document.getElementsByClassName('commentbutton');      // Comment zborot vo kopceto
    const ddd = document.getElementsByClassName('post-comment');      // Font na komentarot
    const dddd = document.getElementsByClassName('location');         // location delot
    for (let i = 0; i < d.length; i++) {
      d[i].classList.toggle('example-card-dark');
      d[i].classList.toggle('font');
      dd[i].classList.toggle('font');
      ddd[i].classList.toggle('font');
      dddd[i].classList.toggle('locationfont');

    }
    console.log(d.length);

    document.getElementById('toolbar').classList.toggle('mat-toolbar-dark');    // toolbar gore
    document.getElementById('homebutton').classList.toggle('darkfont');         // home kopceto vo toolbarot
    document.getElementById('searchbar').classList.toggle('darkfont');          // search barot vo toolbarot fontot koga kje se napise nesto
    document.getElementsByClassName('example-form-field')[0].classList.toggle('darkplaceholder'); //search placeholderot
    document.getElementById('scroll').classList.toggle('darkscroll');       //pozadinata na scrollbar
    document.getElementById('scroll').classList.toggle('darkscr');          //scroll

    if (this.flag === true) {
      (document.getElementById('logo') as HTMLImageElement).src = 'assets/icon.ico';
      this.flag = false;
    } else {
      (document.getElementById('logo') as HTMLImageElement).src = 'favicon.ico';
      this.flag = true;
    }
  }
}

