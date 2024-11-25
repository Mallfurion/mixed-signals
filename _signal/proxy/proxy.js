let activeEffect = null;
let targetMap = new WeakMap();

function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }

  if (activeEffect) dep.add(activeEffect);
}

function trigger(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) return;

  let dep = depsMap.get(key);
  if (!dep) return;

  dep.forEach((effect) => effect());
}

function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      track(target, key);
      return Reflect.get(target, key, receiver);
    },

    set(target, key, value, receiver) {
      trigger(target, key);
      return Reflect.set(target, key, value, receiver);
    }
  };

  return new Proxy(target, handler);
}

function ref(raw) {
  let r = {
    get value() {
      track(r, "value");
      return raw;
    },

    set value(newValue) {
      raw = newValue;
      trigger(r, "value");
    }
  };

  return r;
}

function effect(fn) {
  activeEffect = fn;
  if (activeEffect) {
    activeEffect();
  }
  activeEffect = null;
}
