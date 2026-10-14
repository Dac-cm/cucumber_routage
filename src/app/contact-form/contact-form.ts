import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactData } from '../contact-data';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

  contactForm;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contactData: ContactData
  ) {
    this.contactForm = this.fb.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [
        '',
        Validators.pattern(/^[1-9][0-9]{2}[1-9][0-9]{6}$/)
      ],
      email: ['', Validators.email]
    });
  }

  onSubmit(): void {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    this.contactData.setUser(this.contactForm.getRawValue());

    this.router.navigate(['/resultat']);
  }
}
