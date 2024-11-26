import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import * as data from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [
    CommonModule,
    SectionGenericComponent
  ],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  mockTracksList:Array<TrackModel> = []
  ngOnInit():void {
    this.mockTracksList = data.data;
  }
}
