import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component'
import { Task } from './task'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	message = "TODO List";
	tasks = [];
	
	removeTask(index) {
		this.tasks = this.tasks.filter(this.checkRemove);
	}
	
	checkRemove(index, task, idx) {
		if(index != idx)
			return task;
	}
	
	addTask(newTask: Task) {
		this.tasks.push(newTask);
	}
}
