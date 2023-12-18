import { Injectable } from '@nestjs/common';
import { Task, tasksStatus } from './tasks.model';
import * as uuid from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTasks(title: string, description: string): Task {
    const newTask: Task = {
      id: uuid(),
      title,
      description,
      status: tasksStatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
