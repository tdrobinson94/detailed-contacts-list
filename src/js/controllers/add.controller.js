function AddController(ContactService, $state) {

  let vm = this;

  vm.addContact = addContact;

  function addContact(contact){
    ContactService.createContact(contact).then(function(res){
      $state.go('root.home');
    });
  };

};

AddController.$inject = ['ContactService', '$state'];
export { AddController };
