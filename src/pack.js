import Nude, {
  NuBase,
  NuGrid,
  NuBlock,
  NuHeading,
  NuBtn,
  NuTab,
  NuCard,
  NuIcon,
  NuLayout,
  NuLine,
  NuPane,
  NuGridTable,
  NuBadge,
  NuInput,
  NuScroll,
  NuSwitch,
  NuFlex,
  NuBtnGroup,
  NuTablist,
  NuMenu,
  NuMenuItem,
  NuLink,
  NuTheme,
  NuMod,
  NuVar,
  NuDecorator,
  NuActiveElement,
  NuTriangle,
  NuTooltip,
  NuCell,
  NuColumnHeader,
  NuRow,
  NuRowGroup,
  NuTable,
  NuPopup,
  NuPopupMenu,
} from './index';

Nude.elements = {
  NuGrid,
  NuBlock,
  NuHeading,
  NuBtn,
  NuTab,
  NuCard,
  NuIcon,
  NuLayout,
  NuLine,
  NuPane,
  NuGridTable,
  NuBadge,
  NuInput,
  NuScroll,
  NuSwitch,
  NuFlex,
  NuBtnGroup,
  NuTablist,
  NuMenu,
  NuMenuItem,
  NuLink,
  NuTheme,
  NuMod,
  NuVar,
  NuDecorator,
  NuTriangle,
  NuTooltip,
  NuCell,
  NuColumnHeader,
  NuRow,
  NuRowGroup,
  NuTable,
  NuPopup,
  NuPopupMenu,
};

Nude.init(
  ...Object.values(Nude.elements),
);

Nude.elements.NuBase = NuBase;

window.Nude = Nude;

export default Nude;
