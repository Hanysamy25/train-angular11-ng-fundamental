import { IEvent } from './../shared/event.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from './../../events/shared/event.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
 event?:IEvent
  constructor(private eventService:EventService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=+this.route.snapshot.params['id']
    this.event = this.eventService.getEvent(id)
  }

}
