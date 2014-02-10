on.input.in = function () {

  var g = chi.group('xout', output);

  for(var i = 0; i < data.length; i++) {
    output({
      out: data[i]
    }, g.item());
  }

  g.done();

};
