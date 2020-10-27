import { Component, OnInit } from '@angular/core';
import { FormatsInerface } from 'src/app/interfaces/formats/formats.interface';
import { ControlsInterface } from 'src/app/interfaces/window/window.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.css']
})
export class DisplayTestComponent implements OnInit {

  selects: ControlsInterface[];
  formatsType1: FormatsInerface[];

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.getSelect();
    this.getFormatArray();
  }

  getSelect() {
    this.service.getWindowFilter().subscribe(element => this.selects = element);
  }

  getFormatArray() {
    this.service.getFormatType(1).subscribe(res => {
      this.formatsType1 = res;
    });
  }

}
