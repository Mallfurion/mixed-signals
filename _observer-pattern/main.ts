import { ConcreteObserver } from "./Observer";
import Subject from "./Subject";

const logs = new ConcreteObserver("logs");
const analytics = new ConcreteObserver("analytics");

const subject = new Subject();

subject.subscribe(logs);
subject.subscribe(analytics);

subject.notify("pizza!");
// [LOG] Implementation details: logs
// [LOG] Implementation details: analytics
