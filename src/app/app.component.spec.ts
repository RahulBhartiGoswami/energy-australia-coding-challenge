import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MusicFestival } from './interfaces/ModelFestival';
import { FestivalDataService } from './service/festival-data.service';
import { FestivalServiceService } from './service/festival-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component : AppComponent;
  let festivalDataService: jasmine.SpyObj<FestivalDataService>;
  let festivalService: jasmine.SpyObj<FestivalServiceService>;

  beforeEach(()=>{
    const festivalDataServiceSpy = jasmine.createSpyObj('FestivalDataService',['getMockData']);
    
    TestBed.configureTestingModule({
      declarations:[AppComponent],
      imports:[HttpClientModule],
      providers:[
        {provide:FestivalDataService, useValue:festivalDataServiceSpy},
        HttpClient
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    festivalDataService = TestBed.inject(FestivalDataService) as jasmine.SpyObj<FestivalDataService>;

  });


  it('should create the app', ()=>{
    expect(component).toBeTruthy();
  });

  it('should load festivals and parse data on initialization', ()=>{
    const mockData = [
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
      }
    ];

    festivalDataService.getMockData.and.returnValue(mockData);
    fixture.detectChanges(); // trigger ngOnInit

    expect(festivalDataService.getMockData).toHaveBeenCalled();
    expect(component.festivals).toEqual(mockData);

  });

  it('should return an empty list of festivals when loading festivals', ()=>{
    festivalDataService.getMockData.and.returnValue([]);
    spyOn(component, 'parseAndOrganizedData').and.callThrough();
    fixture.detectChanges();
    expect(component.festivals).toBeLessThan(1);
    expect(component.festivals).toEqual([]);
    expect(component.sortedData).toEqual([]);
  });
  
});
