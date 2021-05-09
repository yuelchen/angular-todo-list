import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
	selector: 'app-task-form',
	templateUrl: './task-form.component.html',
	styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {
	task = new Task("", "");
	
	@Output() newTaskEvent = new EventEmitter<Task>();
	
	addNewTask() {
		if(this.task.name.length > 0) {
			this.newTaskEvent.emit(this.task);
			this.task = new Task("", "");
		}
	}
}