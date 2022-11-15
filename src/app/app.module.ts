import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemeComponent } from './media-iteme/media-iteme.component';
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";
import { ReactiveFormsModule } from "@angular/forms"; 
import { FavouriteDirective } from "./favourite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { HttpClientModule , HttpXhrBackend } from '@angular/common/http'
import { MockXHRBackend } from "./mock-xhr-backend";
const categories = ['Movie','Series']
@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, MediaItemeComponent, MediaItemListComponent, FavouriteDirective, CategoryListPipe, MediaItemFormComponent],
  bootstrap: [AppComponent],
  providers: [
    {provide: 'lookupListToken', useValue: categories},
    {provide: HttpXhrBackend , useClass: MockXHRBackend}
  ]
}) 
export class AppModule {} 