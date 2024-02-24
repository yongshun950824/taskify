import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: Task = { text: '', createdAt: '', id: 0 };

  ngAfterViewInit() {
    initFlowbite();
  }
}
