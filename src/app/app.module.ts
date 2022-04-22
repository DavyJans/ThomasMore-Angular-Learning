import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

import { ShortenContentPipe } from './shorten-content.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ArticleComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    LatestNewsComponent,
    ArticleDetailComponent,
    ShortenContentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
