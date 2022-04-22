import { Component, OnInit, ElementRef } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
/* Required for Materialize to work */
declare var M: any;

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: Article = { id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "", editor: "" };

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private _elementRef : ElementRef) { 

  }

  //Init materialize collapsible
  ngAfterViewInit(){
    let elements = this._elementRef.nativeElement.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elements)
 }

  ngOnInit(): void {

    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId != null) {
      let articleTemp = this.articleService.getArticleById(+articleId) ?? null;
      if(articleTemp != null) {
        this.article = articleTemp;
      }
    }
  }

}
