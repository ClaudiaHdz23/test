import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {

  selectsInfo: any;
  formatValues: any;
  form: FormGroup;
  selectedValue = null;

  @Input() set info(value) {
    if (value) {
      this.selectsInfo = value;
    }
  }

  @Input() set format(value) {
    if (value) {
      this.formatValues = value;
    }
  }

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl({value: '', disabled: true}),
      format: new FormControl({value: '', disabled: true}),
      formatDisplay: new FormControl({value: '', disabled: false}),
      type: new FormControl({value: '', disabled: true}),
    });
  }

  send() {
    console.log(this.form.getRawValue());
  }
}
