import { Component, Input, OnInit } from '@angular/core';
import { PostDetails, PostComments, gg, addComment} from '../model/postDetails';
import { NgForm } from '@angular/forms';
import { generate, from } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  @Input()
    posts: PostDetails;


  constructor() {  }
  clicked = 0;

  ngOnInit() { }

  onClickSubmit(formData) {
    console.log(formData); // sakav da vidam samo kako izgleda objektot koj se prakja
    var isit: string[];
    isit = formData.comment.split(" ");
    console.log(isit)
    if(isit[0] != '')  //da ne moze da se ostavaat prazni komentari
    {
    setTimeout(addComment, 10, this.posts, formData.comment);    // ne znam kako na drug nacin da ja povikam UPS!! funkcija za dodavanje na komentar
    }
   }

  onLike() {
    if (!this.posts.isLiked) {
      console.log(this.posts.flaglike);
      this.posts.likes += 1;
      this.posts.isLiked = true;
      this.posts.flaglike = true;
      setTimeout(gg, 500, this.posts);
      console.log(this.posts.flaglike);
    } else {
      this.posts.flaglike = true;
      setTimeout(gg, 500, this.posts);
    }
  }
}
