module.exports = {
    LOG_FORMAT: {
        http:
            "[:date[clf]] :method :url HTTP/:http-version STATUS=:status - TIME=:response-time ms"
    },
    CORS_OPTIONS: {
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
};
