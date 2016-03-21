on.input.in = function () {

  var g = chi.group('xout', output);

  for(var i = 0; i < input.in.length; i++) {
    output({
      out: input.in[i]
    }, g.item());
  }

  g.done();

};
