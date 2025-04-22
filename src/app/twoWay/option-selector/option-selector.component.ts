import { ChangeDetectionStrategy, Component, input, model, output, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-option-selector',
  imports: [],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionSelectorComponent {

  options = input.required<string[]>();

  selected = model<string>('USD');

  select(option: string) {
    console.log("app-option-selector", option);
    this.selected.set(option);
  }
  
  
}

