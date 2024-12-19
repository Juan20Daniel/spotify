import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
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
  tracksTranding: Array<TrackModel> =[];
  tracksRandom:Array<TrackModel> = [];
  listObservers$:Array<Subscription> = [];
  constructor(private trackService:TrackService) {}
  ngOnInit():void {
    this.loadDataAll();
    this.loadDataRandom();
  }
  loadDataAll():void {
    this.trackService.getAllTracks$()
    .subscribe(res => {
      this.tracksTranding = res;
    });
  }
  loadDataRandom():void {
    this.trackService.getAllRandom$()
    .subscribe(res => {
      this.tracksRandom = res;
    })
  }
  ngOnDestroy():void {
  }
}
