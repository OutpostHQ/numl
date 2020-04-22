import { devMode, error } from './helpers.js';

function extract(module) {
  return module.default || module;
}

const DICT = {};

const Behaviors = {
  focusable: () => extract(import(`./behaviors/focusable.js`)),
  menu: () => extract(import(`./behaviors/menu.js`)),
  menuitem: () => extract(import(`./behaviors/menuitem.js`)),
  active: () => extract(import(`./behaviors/active.js`)),
  fixate: () => extract(import(`./behaviors/fixate.js`)),
  orient: () => extract(import(`./behaviors/orient.js`)),
  popup: () => extract(import('./behaviors/popup.js')),
  control: () => extract(import('./behaviors/control')),
  radiogroup: () => extract(import('./behaviors/radiogroup')),
  button: () => extract(import('./behaviors/button')),
};

export function hasBehavior(el, name) {
  const behaviors = el.constructor.nuAllBehaviors;

  return behaviors && (name in behaviors);
}

export function getBehavior(name) {
  if (DICT[name]) {
    return DICT[name];
  }

  if (devMode && !Behaviors[name]) {
    error('behavior not found', name);
    return;
  }

  let promise = Behaviors[name]();

  if (promise.then) {
    promise = promise.then(module => module.default || module);
  } else {
    promise = Promise.resolve(promise);
  }

  DICT[name] = promise;

  return promise;
}