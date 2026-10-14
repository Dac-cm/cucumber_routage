
import { Injectable } from '@angular/core';

export interface UserInformation {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactData {
  private user: UserInformation | null = null;

  setUser(user: UserInformation): void {
    this.user = user;
  }

  getUser(): UserInformation | null {
    return this.user;
  }
}
