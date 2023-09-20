import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MusicFestival } from './interfaces/ModelFestival';
import { FestivalDataService } from './service/festival-data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { of } from 'rxjs/internal/observable/of';

describe('AppComponent', () => {
 let component: AppComponent;
 let fixture: ComponentFixture<AppComponent>;
 let festivalService: jasmine.SpyObj<FestivalDataService>;


 const mockData: MusicFestival[] = [
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
 ];

 beforeEach(()=>{
  festivalService = jasmine.createSpyObj('festivalService',['getMockData']);
  //festivalService.getMockData.and.returnValue(mockData);
  TestBed.configureTestingModule({
    declarations:[AppComponent],
    providers:[{provide:FestivalDataService, useValue:festivalService}],
    imports:[HttpClientTestingModule]
  }).compileComponents();

  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;

 });

  it('should create', ()=>{
    expect(component).toBeTruthy();
  })

  it('should load festivals', ()=>{
    fixture.detectChanges();
    expect(component.festivals).toEqual(mockData);
  })


});
