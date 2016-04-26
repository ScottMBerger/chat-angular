import { Mongo } from 'meteor/mongo';
export const Texts = new Mongo.Collection('texts');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('texts', function() {
    return Texts.find();
  });
}
