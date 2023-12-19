import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTasksDTO } from './create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTasks(@Body() createTasksDTO: createTasksDTO): Task {
    return this.tasksService.createTasks(createTasksDTO);
  }
}
