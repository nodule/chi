on.input.in1 = function() {
  console.log('in1 start', x, state);
  var id = x[state.color];

  if(!state[id]) state[id] = {};

  state[id].out1 = data;
  console.log('in1 out1 set', x, state);

  if(Object.keys(state[id]) === 2) {

    console.log('in1 sending away', x, state);

    // send them out in correct pairs.
    output({
      out1: state[id].out1,
      out2: state[id].out2
    });

    delete state[id];
  }
};

on.input.in2 = function() {

  console.log('in2 start', x, state);
  var id = x[state.color];

  if(!state[id]) state[id] = {};

  state[id].out2 = data;
  console.log('in2 out2 set', x, state);

  if(Object.keys(state[id]) === 2) {

    console.log('in2 sending away', x, state);

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
