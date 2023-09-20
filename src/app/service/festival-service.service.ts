import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FestivalServiceService {

  constructor(private httpclient: HttpClient) { }

  festivalUrl = "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals";

  // API is giving cross-origin error
  fetchFestivals() {
    return this.httpclient.get(this.festivalUrl);
  }


}
