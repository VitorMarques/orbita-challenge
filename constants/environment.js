module.exports = {
    DATABASE: {
        host: "localhost",
        port: "3306",
        schema:
            process.env.NODE_ENV === "development"
                ? "orbita_challenge"
                : "orbita_challenge_test",
        username: "root",
        password: "root"
    },
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
