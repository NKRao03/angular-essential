import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MediaItemService } from '../media-item.service';
@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  
  form: FormGroup | any;
  
  constructor(private formBuilder : FormBuilder, private mediaItemService: MediaItemService, @Inject('lookupListToken') public lookupLists: any){

  }

  ngOnInit() {
      this.form = this.formBuilder.group({
        medium: this.formBuilder.control('Movies'),
        name: this.formBuilder.control('', Validators.compose(
          [Validators.required,Validators.pattern("[\\w\\-\\s\\/]+")]
        )),
        category: this.formBuilder.control(''),
        years: this.formBuilder.control('', this.yearValidator)
      });
  }
  
  yearValidator(obj: FormControl | any){
    if(obj.value.trim().length === 0){
      return null
    }
    const year = parseInt(obj.value, 10)
    const minYear = 1980, maxYear = 2200
      if (year >= minYear && year <= maxYear) {
        return null;
      } else{
        return {
          mi: minYear,
          ma: maxYear
        };
      }
  }

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
  }
}
