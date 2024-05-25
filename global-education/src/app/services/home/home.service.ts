import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userContent: any
  userDataKey = "User"
  constructor() {
  }

  setUser(datos: any) {
    this.userContent = datos
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.userDataKey, JSON.stringify(datos))
    }
  }
  getUserData() {
    if (!this.userContent) {
      if (this.isLocalStorageAvailable()) {
        const data = localStorage.getItem(this.userDataKey);
        if (data) {
          this.userContent = JSON.parse(data);
        }
      }
    }
    return this.userContent;
  }

  clearUser() {
    this.userContent = null
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.userDataKey)
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
