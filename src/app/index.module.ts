/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';


module cityinfo {
  'use strict';

  angular.module('cityinfo', ['ngAnimate', 'ngRoute', 'ngMaterial', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController);
}
