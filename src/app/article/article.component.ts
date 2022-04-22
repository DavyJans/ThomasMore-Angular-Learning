import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article = {id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "", editor: ""};
  @Input() isDetail: boolean = false;
  @Input() backRoute: string = ""; //maakt extra property aan op de plaats waar je component oproept <app-article *ngFor="let article of filteredArticles('')" [article]="article" [backRoute]="''" [isDetail]="false"></app-article>

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detail(id: number) {
    this.router.navigate(['/article', id]);
  }

  back(target: string) { //function te gebruiken in html - de variable die je aan je functie meegeeft (target in dit geval) krijgt dan weer de waarde die aan input van hierboven meegegeven wordt
    this.router.navigate([target]);
  }

  //component (bvb home) -> voeg nieuwe component toe (bvb article) met input (backRoute) die je waarde geeft -> in component html zelf, roep functie op, geef input als param

}
