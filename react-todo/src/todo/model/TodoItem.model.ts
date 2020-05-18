export class TodoItem {
    description: string;
    done: boolean;
    createdAt: Date;
    _id: string;

    constructor(_id: string, description: string, done: boolean, createdAt: Date) {
        this.description = description;
        this.done = done;
        this.createdAt = createdAt;
        this._id = _id;
    }
}