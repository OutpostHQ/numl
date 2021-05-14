import { devMode, warn } from '../helpers';
import NuEl from './el';

const LEVELS = [1, 2, 3, 4, 5, 6];

export default class NuHeading extends NuEl {
  static get nuTag() {
    return 'nu-heading';
  }

  static get nuRole() {
    return 'heading';
  }

  static get nuGenerators() {
    return {
      level(val) {
        if (!val || !LEVELS.includes(Number(val))) val = 1;

        const fontSize = `var(--h${val}-font-size)`;
        const lineHeight = `var(--h${val}-line-height)`;

        return [{
          $suffix: ':not([size])',
          'font-size': fontSize,
          'line-height': lineHeight,
          '--font-size': fontSize,
          '--line-height': lineHeight,
        }];
      },
    };
  }

  static get nuAttrs() {
    return {
      level: 2,
    };
  }

  static get nuStyles() {
    return {
      display: 'block',
      level: this.nuAttrs.level,
      color: 'var(--local-text-color, var(--text-soft-color))',
      text: 'heading',
    };
  }

  nuChanged(name, oldValue, value) {
    super.nuChanged(name, oldValue, value);

    switch (name) {
      case 'level':
        if (!value) value = this.constructor.nuAttrs.level;

        if (devMode && !LEVELS.includes(Number(value))) {
          return warn('invalid heading level', value);
        }

        this.nuSetAria('level', value);
        break;
    }
  }

  nuConnected() {
    super.nuConnected();

    const region = this.closest('[nu-region]');

    if (region && !region.nuHasAria('labelledby') && !region.hasAttribute('labelledby')) {
      region.nuSetAria('labelledby', this.nuUniqId);
    }
  }
}
