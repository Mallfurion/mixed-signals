import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { renderLog } from '../../utils/log';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  count = signal(0);
  double = computed(() => this.count() * 2);

  constructor() {
    renderLog('Counter');
    effect(() => {
      console.log(`[count] changed to: ${this.count()}`);
    });
  }

  ngOnInit() {
    this.count.set(1);
  }

  increment() {
    this.count.update((c) => c + 1);
  }
}
