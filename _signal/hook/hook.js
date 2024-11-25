const context = [];

function signal(value) {
  const subscriptions = new Set();

  const read = () => {
    const observer = context[context.length - 1];
    if (observer) subscriptions.add(observer);
    return value;
  };

  const write = (newValue) => {
    value = newValue;
    for (const observer of subscriptions) {
      observer.execute();
    }
  };

  return [read, write];
}

function effect(fn) {
  const effect = {
    execute() {
      context.push(effect);
      fn();
      context.pop();
    }
  };

  effect.execute();
}
