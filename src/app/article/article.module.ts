import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';



@NgModule({
  declarations: [ArticleListComponent],
  exports: [
    ArticleListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
