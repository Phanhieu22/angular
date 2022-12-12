import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  idActive: number = 0;

  setterIdActive(id: number) {
    console.log('is active :' + id);
    this.idActive = id;
  }
  getterIdActive() {
    return this.idActive;
  }

  constructor() {}
}
