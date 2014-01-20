var fn = function() {
  return function(target) {

    if(!state[chi.id]) state[chi.id] = {};

    state[chi.id][target] = chi.read(state.color, self);

    if(Object.keys(state[chi.id]) === 2) {

      // send them out in correct pairs.
      output(state[chi.id]);

      delete state[chi.id];
    }

  }
};

on.input.in1   = fn('out1');
on.input.in2   = fn('out2');
on.input.color = function() {
  // TODO: I want this logic just be handled the
  // default way and not having to define this.
  // problem is that context doesn't work now
  // and persist is irrelevant now btw.
  // since we keep our own state
  state['color'] = data;

};
