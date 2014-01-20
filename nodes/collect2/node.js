var fn = function() {
  return function(target) {

    if(!state[chi.id]) state[chi.id] = {};

    state[chi.id][target] = chi.read(input.color, self);

    if(Object.keys(state[chi.id]) === 2) {

      // send them out in correct pairs.
      output(state[chi.id]);

      delete state[chi.id];
    }

  }
};

on.input.in1 = fn('out1');
on.input.in2 = fn('out2');
