import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rack-edit',
  templateUrl: './rack-edit.component.html',
  styleUrls: ['./rack-edit.component.scss']
})
export class RackEditComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

}
