class CustomNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        // Set the error name to distinguish it from generic Errors
        this.name = 'NotFoundError'; 
    }
}

module.exports = CustomNotFoundError;