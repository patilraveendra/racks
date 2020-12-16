import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface racks {
  rackcode: number;
  description: string;
  capacity: number;
  default: string;
  inactive: string;
}

const ELEMENT_DATA: racks[] = [
  { rackcode: 1, description: 'Rack 1', capacity: 1.0079, default: 'H', inactive: 'Y' },
  { rackcode: 2, description: 'Rack 2', capacity: 4.0026, default: 'He', inactive: 'Y' },
  { rackcode: 3, description: 'RAck 3', capacity: 6.941, default: 'Li', inactive: 'Y' },
  { rackcode: 4, description: 'RAck 4', capacity: 9.0122, default: 'Be', inactive: 'Y' },
  { rackcode: 5, description: 'Rack 7', capacity: 10.811, default: 'B', inactive: 'Y' }

];

@Component({
  selector: 'app-rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.scss']
})
export class RackListComponent implements OnInit {

  displayedColumns: string[] = ['rackcode', 'description', 'capacity', 'default', 'inactive','edit', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  editRack(id:number){
    console.log(id);
    this.router.navigate(['/edit-rack', { id: id }]);

  }

  deleteRack(id:number){
    console.log(id);
  }

}
