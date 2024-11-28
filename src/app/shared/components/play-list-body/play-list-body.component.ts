import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as dataRow from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    CommonModule,
    OrderListPipe
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks:TrackModel[] = [];
  optionSort:{property:string | null, order:string }={property:null, order:'asc' }
  ngOnInit(): void {
    this.tracks = dataRow.data;
  }
  changeOrder(property:string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order:order==='asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }
}
