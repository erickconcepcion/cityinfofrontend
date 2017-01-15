/** @ngInject */
export function routerConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider    
    .otherwise({
      redirectTo: '/'
    });
}
