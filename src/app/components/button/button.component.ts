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
  @Input() index!: number;

  @Output() emitTextToButton: EventEmitter<number> = new EventEmitter();

  onClick(): void {
    this.emitTextToButton.emit(this.index);
  }
}
