import { Component } from '@angular/core';
import { AllModules } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-root',
  template: `
    <ag-grid-angular
      style="width: 500px; height: 200px;"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [modules]="modules"
    >
    </ag-grid-angular>
  `
})
export class AppComponent {
  modules = AllModules;
  columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
