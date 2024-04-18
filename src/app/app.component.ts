import { Component } from '@angular/core';
import { ButtonType } from './models/types/button.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colors: ButtonType[] = [
    { type: 'primary', value: 'primary', isCliked: false },
    { type: 'secondary', value: 'secondary', isCliked: false },
    { type: 'danger', value: 'danger', isCliked: false },
    { type: 'success', value: 'success', isCliked: false },
    { type: 'info', value: 'info', isCliked: false },
    { type: 'warning', value: 'warning', isCliked: false },
  ];
  message!: string;

  receiveEmit(event: number): void {
    this.colors[event].isCliked = true;
    const checkIfMinOneBtnIsClicked = this.colors.some((c) => !c.isCliked);

    if (checkIfMinOneBtnIsClicked) {
      this.message = `Bouton ${event + 1} a été cliqué`;
    } else {
      this.message = 'Tous les boutons ont été cliqués';
    }
  }
}
