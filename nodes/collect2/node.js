on.input.in1 = function() {
  var id = x[state.color];

  if(!state[id]) state[id] = {};

  state[id].out1 = data;

  console.log('keys in2 state', id, Object.keys(state[id]));

  if(Object.keys(state[id]).length === 2) {

    // send them out in correct pairs.
    output({
      out1: state[id].out1,
      out2: state[id].out2
    });

    delete state[id];
  }
};

on.input.in2 = function() {

  var id = x[state.color];

  if(!state[id]) state[id] = {};

  state[id].out2 = data;

  console.log('keys in2 state', id, Object.keys(state[id]));

  if(Object.keys(state[id]).length === 2) {

    // send them out in correct pairs.
    output({
      out1: state[id].out1,
      out2: state[id].out2
    });

    delete state[id];
  }
};

on.input.color = function() {
  // TODO: I want this logic just be handled the
  // default way and not having to define this.
  // problem is that context doesn't work now
  // and persist is irrelevant now btw.
  // since we keep our own state
  state.color = data;

};
