const resolvers = {
    Query: {
        sayHello: () => {
            return 'Hello from the backend!!!!';
        }
    }
};

module.exports = resolvers;