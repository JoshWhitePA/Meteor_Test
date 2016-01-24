

CoreClass = new Mongo.Collection("coreClass");


if (Meteor.isClient) {
  // This code only runs on the client

    Template.body.helpers({
        class:[{classID:"CSC-355",classDesc:"Talk about junk", creditHour:"3"}]
    });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // CoreClass.insert({ClassID:"1",ClassDesc:"stuff",CreditHour:"3"});
    // code to run on server at startup
  });
}
