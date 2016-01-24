

CoreClass = new Mongo.Collection("coreClass");
counts = 0;
if (Meteor.isClient) {
  // This code only runs on the client

    Template.body.helpers({
        coreClass:function(){
          return CoreClass.find();;
        },
        countera:function(){
          var count = CoreClass.find().count();
          count += - CoreClass.find({grade: "-"}).count();
          count = count * 3;
          console.log(count);
          return count;
        }

    });

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
