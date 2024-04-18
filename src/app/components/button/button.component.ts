import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type!: string;
  @Input() backgroundColor!: string;
  @Input() value!: string;
  @Input() disabled!: boolean;
  @Input() index!: number;

  @Output() emitTextToButton: EventEmitter<string> = new EventEmitter();
  @Output() emitBoolToButton: EventEmitter<boolean> = new EventEmitter();

  onClick(): void {
    this.emitTextToButton.emit(`Bouton ${this.index + 1} a été cliqué`);
    this.emitBoolToButton.emit(true);
  }
}
