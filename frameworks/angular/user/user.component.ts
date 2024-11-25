import { Component, computed, effect, signal } from '@angular/core';
import { renderLog } from '../../utils/log';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = signal({ name: 'Florin', accountState: 'online' });
  accountState = computed(() => this.user().accountState);

  constructor() {
    renderLog('User');

    effect(() => {
      console.log(`user accountState changed to <${this.accountState()}>`);
    });
  }

  logout() {
    this.user.update((user) => ({ ...user, accountState: 'offline' }));
  }

  rename() {
    this.user.update((user) => ({ ...user, name: 'Alin' }));
  }
}
