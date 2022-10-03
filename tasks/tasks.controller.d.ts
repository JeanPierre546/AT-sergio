import { Task } from './shared/task';
import { TaskService } from './shared/task.service/task.service.controller';
export declare class TasksController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<Task[]>;
    getByID(id: string): Promise<Task>;
    create(task: Task): Promise<Task>;
    update(id: string, task: Task): Promise<Task>;
    delete(id: string): Promise<void>;
}
