import { Task } from '../task';
import { Model } from 'mongoose';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    getAll(): Promise<(Task & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getById(id: string): Promise<Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(task: Task): Promise<Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, task: Task): Promise<Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
export declare class TaskServiceController {
}
