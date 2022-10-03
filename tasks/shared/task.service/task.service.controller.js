"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServiceController = exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const common_2 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async getAll() {
        return this.taskModel.find().exec();
    }
    async getById(id) {
        return await this.taskModel.findById(id).exec();
    }
    async create(task) {
        const createTask = new this.taskModel(task);
        return await createTask.save();
    }
    async update(id, task) {
        await this.taskModel.updateOne({ _id: id }, task).exec();
        return this.getById(id);
    }
    async delete(id) {
        return await this.taskModel.deleteOne({ _id: id }).exec();
    }
};
TaskService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
exports.TaskService = TaskService;
let TaskServiceController = class TaskServiceController {
};
TaskServiceController = __decorate([
    (0, common_1.Controller)('task.service')
], TaskServiceController);
exports.TaskServiceController = TaskServiceController;
//# sourceMappingURL=task.service.controller.js.map