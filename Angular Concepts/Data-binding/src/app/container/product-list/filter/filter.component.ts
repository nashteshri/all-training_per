import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  All: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfstock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'True';



  onSelectedFilterRadioButtonChanged() {

    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }

}
