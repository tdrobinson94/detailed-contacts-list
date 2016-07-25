function AddController($http, SERVER) {

  let vm = this;

  vm.addContact = addContact;

  function addContact(contact){
    $http.post(SERVER.URL, contact).then(function(res){
      console.log(res);
    });
  };

};

AddController.$inject = ['$http', 'SERVER'];
export { AddController };
