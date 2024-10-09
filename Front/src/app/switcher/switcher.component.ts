import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [NgIf],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.css'
})
export class SwitcherComponent {
  isDarkMode = false;

  @Output() toggleMode = new EventEmitter<boolean>();

  onToggle(event: Event) {
    this.isDarkMode = (event.target as HTMLInputElement).checked;
    this.toggleMode.emit(this.isDarkMode);  // Передаємо подію до HomeComponent
  }
}
