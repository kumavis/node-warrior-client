module.exports = function(name, emitter, jseditor) {
  
  // Handle executing code
  var el = document.getElementById('jseditor');
  el.addEventListener('keyup', function(e) {
    if (e.keyCode == 192) {
      console.log('emit code.')
      var code = jseditor.getValue()
      // emitter.emit('code', {user: name, code: code})
      runCode({user: name, code: code})
    }
    
  });

  emitter.on('code', runCode)

  function runCode(execution) {
    console.log(execution.user+' fires code.')
    eval(execution.code)
  }
}
