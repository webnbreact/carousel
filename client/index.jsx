import React from 'react';
import { render } from 'react-dom';
import CarouselLauncher from './CarouselCentral';

const ModuleRefresh = () => {
  render(<CarouselLauncher />, document.getElementById('carouselroot'));
};

ModuleRefresh();
if (module.hot) {
  module.hot.accept('./CarouselCentral', () => {
    ModuleRefresh();
  });
}
// if webpack has injected hot into the module object then,
// module.hot has to listen to any dependencies/or changes to Carouselcentral
// even all the imports, and ucall ModuleRefresh.
