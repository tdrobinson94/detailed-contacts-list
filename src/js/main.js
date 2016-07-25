import angular from 'angular';
import 'angular-ui-router';


import {config} from './config';
import { serverConstant } from './constant';


import { AddController } from './controllers/add.controller';



angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('AddController', AddController)
  .constant('SERVER', serverConstant)
;
