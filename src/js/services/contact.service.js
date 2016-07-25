function ContactService(){

  this.createContact = createContact;


  function createContact(contact){
    return $http.post(SERVER.URL, contact);
  };

};


ContactService.$inject = ['$http', 'SERVER'];

export { ContactService };
