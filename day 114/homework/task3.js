class User {
    constructor(password) {
        this.password = password;
    }

    get password() {
        return "*****";
    }

    set password(value) {
        this._newPassword = value.split("").reverse().join("");
    }

    get newPassword() {
        return this._newPassword;
    }
}

const user = new User("efefef");
console.log(user.password);
console.log(user.newPassword);