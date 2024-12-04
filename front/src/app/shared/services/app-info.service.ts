import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() { }

  public title: string = 'Nota Fiscal';


  public get currentYear() {
    return new Date().getFullYear();
  }
}
