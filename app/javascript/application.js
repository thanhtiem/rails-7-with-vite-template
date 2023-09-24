// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import 'flowbite/dist/flowbite.turbo.js';
import 'flowbite/dist/flowbite.js';
import 'flowbite-datepicker';

const importFlowbiteFunc = function (flowbitePathStr) {
  const flowbiteScriptEl = document.createElement('script');
  flowbiteScriptEl.setAttribute('src', flowbitePathStr);
  document.body.appendChild(flowbiteScriptEl);
};

importFlowbiteFunc('./node_modules/flowbite/dist/flowbite.js');
