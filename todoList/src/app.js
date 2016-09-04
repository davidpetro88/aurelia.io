export class App {
  constructor() {
    // this.message = 'Hello World!';
    // this.repeater = [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    // ];
  }

  configureRouter(config, router) {
    this.router = router;

    config.title = 'Aurelia - Test';
    config.map([
      {
        route: [''],
        name : 'home',
        moduleId: 'home/index',
        title: 'Listing contacts'
      },
      {
        route: ['insert'],
        name: 'insert',
        moduleId: 'insert/insert',
        title: 'Inserting new contact'
      },
      {
        route: ['edit/:name'],
        name: 'edit',
        moduleId: 'edit/edit',
        title: 'Editing current contact'
      }
    ])
  }

  alert() {
    alert('Event Alert')
  }
}