import {Injectable} from '@angular/core';

interface KeyValuePair {
  key: string;
  value: any;
}

@Injectable({ providedIn: 'root' })
export class SomeDataService {
  public data: number = 123;
  public globalArray: KeyValuePair[];
}

