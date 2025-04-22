import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BehaviorSubject, Subject, interval, map, startWith, switchMap, takeUntil, tap } from 'rxjs';
import { outputFromObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RATES } from '../rates';

@Component({
  selector: 'app-currency-converter',
  imports: [CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent {

  readonly manualRefresh$ = new BehaviorSubject<void>(undefined);

  private readonly stop$ = new Subject<void>();
  stopRefresh = () => this.stop$.next();

  readonly refreshRequired$ = this.manualRefresh$.pipe(
    switchMap(() => interval(2000).pipe(startWith(0))),
    map(() => { }),
    tap(x=> console.log("manualRefresh$.pipe ")),
    takeUntilDestroyed(),
    takeUntil(this.stop$)
  );

  readonly refreshRequired = outputFromObservable(this.refreshRequired$);

  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
}

