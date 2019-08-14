module.exports = (app) => {
    return {
        index: (req, res) => {
            res.json({msg: "API do sistema orbita challenge"});
        }
    };
};
