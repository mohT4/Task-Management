import { Injectable } from '@nestjs/common';
import { Task, tasksStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { createTasksDTO } from './create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTasks(createTasksDTO: createTasksDTO): Task {
    const { title, description } = createTasksDTO;
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: tasksStatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
