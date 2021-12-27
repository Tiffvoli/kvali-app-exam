class Event {
   constructor(
      public id: string,
      public eventTitle: string,
      public group: string,
      public imageName: string,
      public date: Object,
      public address: string,
      public venue: string,
      public timeStart: string,
      public timeEnd: string,
      public description: string,
      public title1: Object,
      public time1: Object,
      public title2: Object,
      public time2: Object,
      public title3: Object,
      public time3: Object,
      public title4: Object,
      public time4: Object,
   ) {
      this.id = id;
      this.eventTitle = eventTitle;
      this.group = group;
      this.imageName = imageName;
      this.date = date;
      this.address = address;
      this.venue = venue;
      this.timeStart = timeStart;
      this.timeEnd = timeEnd;
      this.description = description;
      this.title1 = title1;
      this.time1 = time1;
      this.title2 = title2;
      this.time2 = time2;
      this.title3 = title3;
      this.time3 = time3;
      this.title4 = title4;
      this.time4 = time4;
   }
}

export default Event;
