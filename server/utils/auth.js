const jwt = require("jsonwebtoken");

const secret = "mysecretssshhhhhhh";
const expiration = "2h";

module.exports = {
    signToken: function ({ email, name, _id }) {
        const payload = { email, name, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
            token = token.split(" ").pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            throw new Error("Invalid token");
        }

        return req;
    },
};
