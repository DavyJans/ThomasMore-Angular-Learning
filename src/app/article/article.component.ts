import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article = {id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "", editor: ""};

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

}
