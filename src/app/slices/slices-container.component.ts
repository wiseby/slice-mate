import { Component, OnInit } from '@angular/core';
import { Slice } from '../core/interfaces/slice';

@Component({
  selector: 'slices-container',
  templateUrl: './slices-container.component.html',
  styleUrls: ['./slices-container.component.scss'],
})
export class SlicesContainerComponent implements OnInit {

  slices: Slice[] = [
    {
      id: '1',
      name: 'A part',
      description: 'Something really useful',
      version: '1.9.3'
    },
    {
      id: '2',
      name: 'Junk',
      description: 'Please throw it away',
      version: '1.9.3'
    },
    {
      id: '3',
      name: 'A pokemon',
      description: 'Really nice one',
      version: '1.9.3'
    },
    {
      id: '4',
      name: 'bike part',
      description: 'Should be used on a green bike',
      version: '1.9.3'
    },
    {
      id: '5',
      name: 'Soap dispenser',
      description: 'tin man uses it'
    },
    {
      id: '5',
      name: 'Car part',
      description: 'Hitch cover that looks good',
      version: '1.9.3'
    },
    {
      id: '6',
      name: 'The Mandalorian Model',
      description: 'The famous mando in plastic',
      version: '1.9.3'
    },
    {
      id: '7',
      name: 'Baby Yoda',
      description: 'The stubborn sidekick'
    },
  ]

  constructor() {}

  public ngOnInit(): void {}

  public deleteSlice(slice: Slice): void {
    console.log('Deleting slice: ', slice);
  }

  public addSlice(): void {
    console.log('Add slice initiated');
  }
}
