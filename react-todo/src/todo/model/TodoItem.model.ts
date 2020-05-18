export class TodoItem {
    description: string;
    done: boolean;
    createdAt: Date;
    __id: string;

    constructor(__id: string, description: string, done: boolean, createdAt: Date) {
        this.description = description;
        this.done = done;
        this.createdAt = createdAt;
        this.__id = __id;
    }
}