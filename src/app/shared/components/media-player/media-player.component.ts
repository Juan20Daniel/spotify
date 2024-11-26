import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    _id:1,
    url:'http://localhost/tracks.mp3',
    cover:'https://cdn.royalcanin-weshare-online.io/bmkjPmYBG95Xk-RBuN3W/v1/ec17h-how-to-choose-your-kittens-first-food-hero-cat',
    album:'Luis el meco miguel',
    name:'Canzas'
  }
}
