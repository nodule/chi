on.input.in = function () {

  var g = chi.group('xout', output);

  for(var i = 0; i < $.in.length; i++) {
    output({
      out: $.in[i]
    }, g.item());
  }

  g.done();

};
