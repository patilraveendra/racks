import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rack } from '../models/rack';
import { RackService } from '../rack.service';

export interface racks {
  Id: number;
  Description: string;
  Code: number;
  Capacity: string;
  IsDefault: boolean;
}

// const ELEMENT_DATA: racks[] = [
//   { rackcode: 1, description: 'Rack 1', capacity: 1.0079, default: 'H', inactive: 'Y' },
//   { rackcode: 2, description: 'Rack 2', capacity: 4.0026, default: 'He', inactive: 'Y' },
//   { rackcode: 3, description: 'RAck 3', capacity: 6.941, default: 'Li', inactive: 'Y' },
//   { rackcode: 4, description: 'RAck 4', capacity: 9.0122, default: 'Be', inactive: 'Y' },
//   { rackcode: 5, description: 'Rack 7', capacity: 10.811, default: 'B', inactive: 'Y' }

// ];

@Component({
  selector: 'app-rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.scss']
})
export class RackListComponent implements OnInit {

  displayedColumns: string[] = ['rackcode', 'description', 'capacity', 'default', 'inactive', 'edit', 'delete'];
  dataSource = [];
  racks: Rack[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rackservice: RackService
  ) { }

  ngOnInit(): void {
    this.rackservice.getRacks().subscribe(racks => {
      console.log('service');
      this.racks = racks
      this.dataSource=this.racks;
    });
    console.log(this.racks);
  }

  editRack(id: number) {
    console.log(id);
    this.router.navigate(['/edit-rack', { id: id }]);

  }

  deleteRack(id: number) {
    console.log(id);
  }

}
