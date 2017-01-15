export interface ICity
{
    id:number,
    name:string,
    description:string,
    imageUrl: string,
    pointsOfInterest:IPointOfInterest[]
}
export interface IPointOfInterest
{
    id:number,
    name:string,
    description:string,
    imageUrl: string,
}
export class PocoyoVideoService {
  //public apiHost: string = 'https://www.googleapis.com/youtube/v3/search';
  private cities:ICity[];
  /** @ngInject */
  constructor(private $log: angular.ILogService, private $http: angular.IHttpService) {
    // 
  }
  public getCities(): ICity[] {
      this.cities = new ICity[]
  }
}