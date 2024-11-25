import { Component, effect } from '@angular/core';
import { renderLog } from '../../utils/log';
import { signalState, patchState } from '@ngrx/signals';

@Component({
  selector: 'app-user-state',
  standalone: true,
  imports: [],
  templateUrl: './user-state.component.html',
  styleUrl: './user-state.component.scss',
})
export class UserStateComponent {
  user = signalState({ name: 'Florin', accountState: 'online' });

  constructor() {
    renderLog('User');

    effect(() => {
      console.log(`user state changed to <${this.user().accountState}>`);
    });
  }

  logout() {
    patchState(this.user, { accountState: 'offline' });
  }

  rename() {
    patchState(this.user, { name: 'Alin' });
  }
}
