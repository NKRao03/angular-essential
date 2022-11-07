import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-iteme',
  templateUrl: './media-iteme.component.html',
  styleUrls: ['./media-iteme.component.css']
})
export class MediaItemeComponent{
  @Input('mediaItemToWatch') mediaItemName: any;

 @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItemName);
  }
}
