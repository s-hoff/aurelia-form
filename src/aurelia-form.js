import {Config} from './config';
import {entitySchema} from './entity-schema';
import {Form} from './form';

function configure(aurelia, configCallback) {
  let config = aurelia.container.get(Config);

  configCallback(config);

  aurelia.globalResources(
    './elements/schema-form',
    './elements/form-fields',
    './elements/form-field'
  );
}

export {
  Form,
  configure,
  entitySchema
};
