import Subject from "./Subject";

// Subscriber (consumer)
export interface Observer {
  name: string;

  notify(data: any): void;
}

export class ConcreteObserver implements Observer {
  constructor(public name) {
    this.name = name;
  }

  notify(data: any) {
    console.log(`${name} recieved ${data}`);
  }
}
