on.input.in1 = function () {
  var id = x[state.gid];

  if (!state[id]) state[id] = {};

  state[id].out1 = data;

  if (Object.keys(state[id]).length === 2) {

    // send them out in correct pairs.
    output(state[id]);

    // delete state[id];
  }
};

on.input.in2 = function () {

  var id = x[state.gid];

  if (!state[id]) state[id] = {};

  state[id].out2 = data;

  if (Object.keys(state[id]).length === 2) {

    // send them out in correct pairs.
    output(state[id]);

    // delete state[id];
  }
};

on.input.xin = function () {
  if (!data.complete) {
    state.gid = data.gid;
    state.complete = false;
  } else {
    state.complete = true;
    state.l = data.items.length;
  }
};
