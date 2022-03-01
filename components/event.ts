class Event {
  id: string;
  constructor(public title: string, public description: string, public date: string,) {
    this.id = title;
  }
}

export default Event;
