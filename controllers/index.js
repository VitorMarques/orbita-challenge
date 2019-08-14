module.exports = (app) => {
    return {
        index: (request, response) => {
            response.json({msg: "API do sistema orbita challenge"});
        }
    };
};
