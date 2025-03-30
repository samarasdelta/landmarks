import { Injectable } from '@angular/core';
import Parse from 'parse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  constructor() {
    Parse.initialize(environment.APP_ID, environment.MASTER_KEY);
    Parse.serverURL = environment.SERVER_URL;
  }

  async getLandmarks(): Promise<any[]> {
    const Landmark = Parse.Object.extend('Landmark');
    const query = new Parse.Query(Landmark);

    try {
      const results = await query.find();
      return results.map(obj => obj.toJSON());
    } catch (error) {
      console.error('Error fetching landmarks:', error);
      return [];
    }
  }
}
