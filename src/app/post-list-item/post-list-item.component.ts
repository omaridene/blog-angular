import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() content: string;
  @Input() loveit: number;
  @Input() date: Date;


  like(){
    this.loveit++;
  }


  dislike(){
    this.loveit--;
  }

  getColor(){
    if(this.loveit >= 0) return 'green';
    else return 'red';
  }

  ngOnInit() {
  }

}
