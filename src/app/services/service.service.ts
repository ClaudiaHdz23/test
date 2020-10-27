import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  WindowInterface,
  ControlsInterface,
} from '../interfaces/window/window.interface';
import { FormatsInerface } from '../interfaces/formats/formats.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(public http: HttpClient) {}

  getWindowJson(): Observable<WindowInterface> {
    return this.http.get<WindowInterface>('assets/window.json');
  }

  getWindowFilter(): Observable<ControlsInterface[]> {
    return this.getWindowJson().pipe(
      map((element: WindowInterface) =>
        element.controls.filter((control) => control.type === 'select')
      )
    );
  }

  getFormatsJson(): Observable<FormatsInerface[]> {
    return this.http.get<FormatsInerface[]>('assets/formats.json');
  }

  getFormatType(type: number): Observable<FormatsInerface[]> {
    return this.getFormatsJson().pipe(
      map((element: FormatsInerface[]) =>
        element.filter((control) => control.type === type)
      )
    );
  }
}
