import { Observer } from "./Observer";

// Publisher (producer)
export default class Subject {
  #observers: Set<Observer> = new Set();

  subscribe(observer: Observer) {
    this.#observers.add(observer);
  }

  unsubscribe(observer: Observer) {
    this.#observers.delete(observer);
  }

  notify(data: any) {
    for (const observer of this.#observers) {
      observer.notify(data);
    }
  }
}
