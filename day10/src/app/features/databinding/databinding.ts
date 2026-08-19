import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding  {
  // ─── Interpolation ──────────────────────────────────────────────
  courseName = 'Angular Data Binding';
  lessonNumber = 3;

  get fullTitle(): string {
    return this.courseName + ' — Lesson ' + this.lessonNumber;
  }

  constructor(){

  }
changestudentName(){
  this.studentName = "ali"
}
  // ─── Property ───────────────────────────────────────────────────
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';
  isDisabled = true;

  // ─── Property vs Interpolation ──────────────────────────────────
  buttonLabel = 'Click me';
  progress = 65;

  // ─── Attribute ──────────────────────────────────────────────────
  tooltip = 'Hello from [attr.title]';

  // ─── Event ──────────────────────────────────────────────────────
  clickCount = 0;
  typedText = '';

  // ─── Event example ──────────────────────────────────────────────
  counter = 0;

  // ─── Class ──────────────────────────────────────────────────────
  isActive = true;
  hasError = false;

  // ─── Style ──────────────────────────────────────────────────────
  boxColor = '#0d6efd';
  fontSize = 18;

  // ─── Two-way ────────────────────────────────────────────────────
  studentName = '';

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

  onClick(): void {
    this.clickCount++;
  }

  onKeyup(event: Event): void {
    this.typedText = (event.target as HTMLInputElement).value;
  }

  inc(): void {
    this.counter++;
  }

  dec(): void {
    this.counter--;
  }

  resetCounter(): void {
    this.counter = 0;
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  toggleError(): void {
    this.hasError = !this.hasError;
  }

  bumpFont(delta: number): void {
    this.fontSize = Math.min(36, Math.max(12, this.fontSize + delta));
  }
}
