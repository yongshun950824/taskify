import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../interfaces';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgForOf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() tasks: Task[] = [];
}
