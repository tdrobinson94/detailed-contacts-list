function SingleController(ContactService, $stateParams){

  let vm = this;

  init();

  function init(){
    ContactService.readContact($stateParams.id).then(function(res){
      vm.contact = res.data;
    });
  };

};

SingleController.$inject = ['ContactService', '$stateParams'];

export { SingleController };
