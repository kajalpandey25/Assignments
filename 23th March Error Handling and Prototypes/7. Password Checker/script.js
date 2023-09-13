class User {
    
    constructor(username, password) {
         this.username = username;
         this._password = password;
    }

    get password() {
        return this._password.replace(/./g, '*');
      }


    set password(newPassword) {
           if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
      console.error('Error: Invalid password. The password must be at least 8 characters long and contain at least one number and one uppercase letter.');
    } else {
      this._password = newPassword;
    }
    }
}


const user = new User('myusername', 'mypassword');

console.log(user.password); // Output: ********

user.password = 'newpassword'; // Logs an error message to the console because the new password is too short

user.password = 'newPassword123'; // Sets the new password

console.log(user.password); // Output: **********