import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let editor = params['editor'];
      this.filteredArticles(editor);
  });
  }

  filteredArticles(editor: string){
     return editor === "" ? this.articleService.getArticles() : this.articleService.getArticles().filter(x => x.editor === editor);

}

}
