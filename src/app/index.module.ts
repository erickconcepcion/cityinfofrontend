/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';


module pocoyoplayer {
  'use strict';

  angular.module('pocoyoplayer', ['ngAnimate', 'ngRoute', 'ngMaterial', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
}
