import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FestivalDataService {

  constructor(private httpClient:HttpClient) { }

  fetcMockData(){
    return this.httpClient.get('../../../assets/mockResponse.json');
  }

  getMockData() {
    return [
      {
        "bands": [
          {
            "name": "Propeller",
            "recordLabel": "Pacific Records"
          },
          {
            "name": "Critter Girls",
            "recordLabel": "ACR"
          }
        ]
      },
      {
        "name": "Trainerella",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Still Bottom Records"
          },
          {
            "name": "Manish Ditch",
            "recordLabel": "ACR"
          },
          {
            "name": "Adrian Venti",
            "recordLabel": "Monocracy Records"
          },
          {
            "name": "YOUKRANE",
            "recordLabel": "Anti Records"
          }
        ]
      },
      {
        "name": "LOL-palooza",
        "bands": [
          {
            "name": "Winter Primates",
            "recordLabel": ""
          },
          {
            "name": "Frank Jupiter",
            "recordLabel": "Pacific Records"
          },
          {
            "name": "Jill Black",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Werewolf Weekday",
            "recordLabel": "XS Recordings"
          }
        ]
      },
      {
        "name": "Small Night In",
        "bands": [
          {
            "name": "Squint-281",
            "recordLabel": "Outerscope"
          },
          {
            "name": "The Black Dashes",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Green Mild Cold Capsicum",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Yanke East",
            "recordLabel": "MEDIOCRE Music"
          },
          {
            "name": "Wild Antelope",
            "recordLabel": "Marner Sis. Recording"
          }
        ]
      },
      {
        "name": "Twisted Tour",
        "bands": [
          {
            "name": "Summon",
            "recordLabel": "Outerscope"
          },
          {
            "name": "Auditones",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Squint-281"
          }
        ]
      }
    ]
  }
}
