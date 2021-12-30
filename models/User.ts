class User {
   constructor(
      public id: string,
      public firstName: string,
      public lastName: string,
      public email: string,
      public chatToggle: any,
      public eventToggle: any,
   ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.chatToggle = chatToggle;
      this.eventToggle = eventToggle;
   }
}

export default User;
