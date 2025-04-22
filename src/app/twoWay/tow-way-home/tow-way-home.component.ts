import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { RATES } from '../rates';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { OptionSelectorComponent } from '../option-selector/option-selector.component';

@Component({
  selector: 'app-tow-way-home',
  imports: [OptionSelectorComponent,CurrencyConverterComponent,
    ReactiveFormsModule],
  templateUrl: './tow-way-home.component.html',
  styleUrl: './tow-way-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TowWayHomeComponent {

  converter = viewChild.required(CurrencyConverterComponent);
  readonly currencies = Object.keys(RATES);

  /*   */
  readonly currency = signal('GBP');
  /*   */

  amount = new FormControl(100);

  stopIt() {
    this.converter().stopRefresh()
  }

  refreshData() {
    console.log('refreshData');
  }  
}
