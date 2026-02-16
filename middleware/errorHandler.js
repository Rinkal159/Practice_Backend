const errorHandler = (func) => {
    return async function (req, res, next) {
        try {
            const result = await func(req, res, next);
            return result;
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}

export default errorHandler;