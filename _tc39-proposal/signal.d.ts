// @ts-nocheck
interface SignalOptions<T> {
  //
}

interface Signal<T> {
  get(): T;
}

namespace Signal {
  class State<T> implements Signal<T> {
    constructor(t: T, options?: SignalOptions<T>);
    get(): T;
    set(t: T): void;
  }

  class Computed<T> implements Signal<T> {
    constructor(cb: (this: Computed<T>) => T, options?: SignalOptions<T>);
    get(): T;
  }

  namespace sublte {
    // various functions
    class Watcher {
      constructor(notify: (this: Watcher) => void);
      watch(...s: Signal[]): void;
      unwatch(...s: Signal[]): void;
    }

    var watched: Symbol;
    var unwatched: Symbol;
  }
}
