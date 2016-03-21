on.input.in1 = function () {
  var id = x[state.gid];

  if (!state[id]) state[id] = {};

  state[id].out1 = input.in1;

  if (Object.keys(state[id]).length === 2) {

    // send them out in correct pairs.
    output(state[id]);

    // delete state[id];
  }
};

on.input.in2 = function () {

  var id = x[state.gid];

  if (!state[id]) state[id] = {};

  state[id].out2 = input.in2;

  if (Object.keys(state[id]).length === 2) {

    // send them out in correct pairs.
    output(state[id]);

    // delete state[id];
  }
};

on.input.xin = function () {
  if (!input.xin.complete) {
    state.gid = input.xin.gid;
    state.complete = false;
  } else {
    state.complete = true;
    state.l = input.xin.items.length;
  }
};
