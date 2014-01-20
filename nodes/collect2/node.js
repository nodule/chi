// for now, input is disregarded
/**
 *
 * Ok what I miss overhere is the information
 * of the amount of connections, which is internal
 * knowledge
 *
 * But since this is _our_ process there is
 * actually not much reason not to give that information
 *
 */

// ok, could bind the required information to this
// Need access to the data
// Need access to the amount of connections
// Need access to chi
// Need access to state
//
// parameters(input, state, chi, source)
//
// Ok, what we do is collect incomming and if
// we have
state = {
};
var fn = function() {
  return function(target) {

    if(!state[chi.id]) state[chi.id] = {};

    state[chi.id][target] = chi.read(input.color, self);

    if(Object.keys(state[chi.id]) === 2) {

      // send them out in correct pairs.
      output(state[chi.id]);

      delete state[chi.id];
    }

  };
});

on.input.in1 = fn('out1');
on.input.in2 = fn('out2');
