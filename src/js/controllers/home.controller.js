function HomeController(){

  let vm = this;


  function init(){
    ContactService.readContacts().then(function(res){
      vm.contacts = res.data;
    });
  };

};

HomeController.$inject = ['ContactService'];

export { HomeController };
