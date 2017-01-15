export class MainController {
    public hello:string;
  /* @ngInject */
  constructor($timeout: angular.ITimeoutService, toastr: any, $mdDialog: any) {
    this.hello = "hello world"
  }

  
}