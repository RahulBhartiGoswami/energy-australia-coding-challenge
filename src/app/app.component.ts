import { Component, OnInit } from '@angular/core';
import { Band } from './interfaces/Band';
import { MusicFestival } from './interfaces/ModelFestival';
import { RecordLabel } from './interfaces/RecordLabel';
import { FestivalDataService } from './service/festival-data.service';
import { FestivalServiceService } from './service/festival-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  festivals: MusicFestival[] = [];
  sortedData:RecordLabel[] = [];
  
  constructor(private festivalService: FestivalDataService, private festivalApiService: FestivalServiceService) { }

  ngOnInit() {
    this.loadFestivals();
  }

  loadFestivals() {

    // fetching the mock data as we are getting cross-origin error 
    //from the back-end apihttps://eacp.energyaustralia.com.au/codingtest/api/v1/festivals 
    this.festivals =this.festivalService.getMockData();
    this.sortedData = this.parseAndOrganizedData(this.festivals);

  }

  parseAndOrganizedData(data:MusicFestival[]):RecordLabel[]{
    const recordLabels: RecordLabel[]=[];

    // Step 1: Extract unique record labels
    const uniqueRecordLabels = new Set<string>();
    data.forEach(festival=>{
      festival.bands.forEach(band=>{
        uniqueRecordLabels.add(band.recordLabel || 'No Label');
      });
    });

    // Step 2: Organize data by record label
    uniqueRecordLabels.forEach(label=>{
      const bands:Band[]=[];
      this.festivals.forEach(festival=>{
        festival.bands.forEach(band=>{
          if (band.recordLabel===label || (!band.recordLabel && label==='No Label')){
            bands.push(band);
          }
        });
      });

      // Step 3: Sorts bands alphabetically
      bands.sort((a,b)=>a.name.localeCompare(b.name));
      recordLabels.push({
        label, 
        bands
      });
    });

    // Sort records alphabetically
    recordLabels.sort((a,b)=>a.label.localeCompare(b.label));

    return recordLabels;
  }
  

  getFestivals(band:Band) {
    const festivals:string[] = [];
    this.festivals.forEach(festival=>{
      festival.bands.forEach(festivalBands=>{
        if (festivalBands.name==band.name){
          if (festival.name!==undefined){
            festivals.push(festival.name);
          }
        }
      });
    });
    return festivals;
  }

}
