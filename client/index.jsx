import React from 'react';
import { render } from 'react-dom';
import CarouselCentral from './CarouselCentral';
// import Test from './components/Test';

// const ModuleRefresh = () => {
//   render(<CarouselLauncher />, document.getElementById('carouselroot'));
// };

// ModuleRefresh();
// if (module.hot) {
//   module.hot.accept('./CarouselCentral', () => {
//     ModuleRefresh();
//   });
// }
render(<CarouselCentral />, document.getElementById('carouselroot'));
// if webpack has injected hot into the module object then,
// module.hot has to listen to any dependencies/or changes to Carouselcentral
// even all the imports, and ucall ModuleRefresh.
