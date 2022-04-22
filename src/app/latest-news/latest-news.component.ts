import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';
import * as moment from 'moment';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    var oldest = moment().subtract(1, 'week');

    this.articles = this.articleService.getArticles().filter(x => moment(x.publishDate, "DD/MM/YYYY hh:mm").isAfter(oldest))
  }

}
