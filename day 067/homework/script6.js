function User(userName, contact){
    this.userName = userName;
    this.contact = contact;
    this.getContactInfo = function(){
        console.log(contact);
    }
}
const User1 = new User("kote", {email: "deded@gmail.com", phone: "+995 32 33 32"});
User1.getContactInfo();