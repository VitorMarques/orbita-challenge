module.exports = (app) => {
    const genericModel = app.models.genericmodel;

    const table = "user";
    const fields = ["id", "name", "email", "state"];

    const UserModel = {
        findById: (paramId) => {
            return genericModel.find(fields, table, {id: paramId});
        },
        findByEmailAndPassword: (email, password) => {
            const select = ["id", "email"];
            const where = {email: email, password: password};
            return genericModel.find(select, table, where);
        },
        create: (user) => {
            return genericModel.create(user, table, fields);
        },
        delete: (paramId) => {
            return genericModel.delete(table, {id: paramId});
        }
    };

    return UserModel;
};
