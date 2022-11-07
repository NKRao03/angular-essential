import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemeComponent } from './media-iteme/media-iteme.component';
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MediaItemeComponent, MediaItemListComponent],
  bootstrap: [AppComponent]
}) 
export class AppModule {} 