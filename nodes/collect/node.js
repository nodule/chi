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

//on.in = function(input, state) {
on.input.in = function() {

  // ok, could bind the required information to this
  // Need access to the data
  // Need access to the amount of connections
  // Need access to chi
  // Need access to state 
  //
  // chi is something to expose
  // data  is just the "variable" input.
  // state is the sandbox.state.
  // parameters(input, state, chi)
  // I think I should just bind the node to this function
  // it's the live state of the node and that's useful
  // for async input.
  //
  // Ok, an xNode in general should be able to know how
  // many connections there are to a port.
  // from who, I'm not sure if it needs to know that.
  // I think that's something for the Actor.
  //
  // However if you really want decoupling, you do not
  // know how many connections there are either.
  //
  // Nah, ofcourse a node should be able to read it's connections
  // this doesn't mean the number of connections cannot be dynamic.
  // at least it should be able to read it's number of connections.
  //
  // butttt, right now i do openPort() but that's just to register it as
  // open, it doesn't tell who did it, so maybe also add there
  // who opened it, and only consider it open for that link?
  // The funny thing is, you can then connect multiple to one port
  // and on output you know from who the input was.
  // So you could do stuff like, who gave me input? ok, then I'll
  // send the output to that one. etc.. if you have then
  // connected many to the output port, you can send it in the right
  // direction.
  // Would be a bit like a router process then.
  // Useful?
  //
  // Not really, you can do the same in a flow I think.
  //
  // This indicates names and who was the source is not realy relevant.
  // How many are connected is relevant though.
  // Because in this case I want to wait for all..
  // hmz, ok and thus I need names to distinguishes them.
  // the names are then only relevant to distinguish,
  // the names themselves are not important.
  //
  // So... i will also need the source port
  // And thus, the total source information.
  // only the source portName is not unique enough.
  // This is the information that's inside `link`
  //
  // and, this information is all you get with portFill
  //
  // parameters(input, state, chi, source)

});
output.out = chi.read(input.color, self);
