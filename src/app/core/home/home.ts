
import { Component } from '@angular/core';
import { EventsList } from '../events-list/events-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventsList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}