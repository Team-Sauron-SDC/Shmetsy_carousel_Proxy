'use strict';


function randomId(userContext, events, done) {
  // generate data:
  const id = Math.floor(Math.random()*10000000) + 1;
  // add variables to virtual user's context:
  userContext.vars.id = id
  // continue with executing the scenario:
  return done();
}

module.exports = {
    randomId
};
