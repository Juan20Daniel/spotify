import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as dataRow from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks:TrackModel[] = [];

  ngOnInit(): void {
    this.tracks = dataRow.data;
  }
}
