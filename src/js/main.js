import angular from 'angular';
import 'angular-ui-router';


import {config} from './config';
import { serverConstant } from './constant';


import { ContactService } from './services/contact.service';


import { AddController } from './controllers/add.controller';
import { HomeController } from './controllers/home.controller';



angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('AddController', AddController)
  .constant('SERVER', serverConstant)
  .service('ContactService', ContactService)
  .controller('HomeController', HomeController)
;
