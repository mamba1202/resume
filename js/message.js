//初始化
var APP_ID = 'iLDvVrBkNn3q2VnPXvdSoFQf-gzGzoHsz';
var APP_KEY = 'RFQ5R7G0CA8nC61JtQtEF9hF';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

//查找Message
var query = new AV.Query('Message');
query.find()
    .then(
        function (messages) {
            // 成功获得实例
            let array = messages.map((itema) => itema.attributes)
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = `${item.name}: ${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
            })
        },
        function (error) {
            // 异常处理
            alert('提交失败，请改天来留言')
        })

//监听form表单
let myForm = document.querySelector('#postMessageForm') //监听form表单的submit按钮 当用户点击按钮或回车都会触发事件
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        window.location.reload()
    })
})















/*let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        console.log(object)
    })
})*/

/*
// 创建 TestObject 表
var X = AV.Object.extend('Frank2');
// 在表中创建一行数据
var o = new X();
// 数据内容是 words: 'Hello World!' 保存
// 如果保存成功，则运行 alert('')
o.save({
  xxxxxxxxxx: 'Fuck World!'
}).then(function() {
  console.log(arguments[0])
})
*/

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
