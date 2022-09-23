
@createdAt
class User {
    name: string = "me";
}

function createdAt<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createdAt = Date.now();
    }
}

console.log(new User());