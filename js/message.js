var APP_ID = 'mSTX5Ulr89qA5fAUQLiFqfrj-gzGzoHsz';
var APP_KEY = '2xwtlyGt7FAfS385CXLUpcrQ';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

console.log('运行无报错')
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})


/*let myForm = document.querySelector('#postMessage')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    console.log('1')
    message.save({
        'name': name,
        'content': content
    })
})
*/
