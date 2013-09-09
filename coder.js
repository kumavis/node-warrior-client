module.exports = function(name, emitter, jseditor) {

  
  // return api object
  return {
    runCode: runCode,
  }
  
  // Handle executing code
  function runCode(environment) {
    environment = environment || {}

    // bring environment keys into scope
    var preamble = Object.keys(environment)
                         .map(function(key){ return 'var '+key+' = environment.'+key+';' })
                         .join('\n')
                         + "\n\n//======= end of preamble ========\n\n"

    var userCode = jseditor.getValue()
    console.log('firing code:\n',userCode)

    var code = preamble + userCode

    eval(code)
  }

}
