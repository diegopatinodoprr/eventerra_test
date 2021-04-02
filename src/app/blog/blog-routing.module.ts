import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';

import { BlogComponent } from './blog.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'cards', component: ListComponent },
  { path: 'article/:id', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
