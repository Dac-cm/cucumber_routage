
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactData } from '../contact-data';

@Component({
  selector: 'app-contact-result',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-result.html',
  styleUrl: './contact-result.css'
})
export class ContactResult {
  user;

  constructor(private contactData: ContactData) {
    this.user = this.contactData.getUser();
  }
}
