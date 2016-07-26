function config($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('root', {
      templateUrl: 'templates/layout.tpl.html',
      abstract: true
    })

    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })

    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html'
    })

    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController as vm'
    })

    .state('root.single', {
      url: '/contact/:id',
      templateUrl: 'templates/contact.tpl.html',
      controller: 'SingleController as vm'
    })

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export {config};
