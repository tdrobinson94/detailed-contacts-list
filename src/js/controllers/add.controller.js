function AddController() {

  let vm = this;

  vm.addContact = addContact;

  function addContact(contact){
    console.log(contact);
  };

};

AddController.$inject = [];
export { AddController };
