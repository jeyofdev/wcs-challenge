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
  text!: string;

  receiveEmit(event: string): void {
    this.text = event;
  }

  receiveClick(event: boolean, index: number): void {
    this.colors[index].isCliked = event;
    const checkIfMinOneBtnIsClicked = this.colors.some((c) => !c.isCliked);

    if (!checkIfMinOneBtnIsClicked) {
      this.text = 'Tous les boutons ont été cliqués';
    }
  }
}
