export class NotFoundError extends Error {
    constructor(error) {
        super(error.message || error);
        this.data = { error };
        this.statusCode = 404;
    }
}

export class BadRequestError extends Error {
    constructor(error) {
        super(error.message || error);
        this.data = { error };
        this.statusCode = 400;
    }
}