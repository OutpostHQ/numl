import NuIcon from './icon';

export default class NuDropdownIcon extends NuIcon {
  static get nuTag() {
    return 'nu-dropdownicon';
  }

  static get nuAttrs() {
    return {
      name: 'chevron-down',
    };
  }

  static get nuStyles() {
    return {
      scale: '^parent:pressed[flip-y]', // if parent action is pressed then flip the icon
      space: '^parent:action[.5em left right] 0', // if parent is action
      color: '^parent #special :special[#special-text]',
    };
  }
}
