!function () {
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
        let Message = AV.Object.extend('Message');
        let message = new Message();
        message.save({
            'name': name,
            'content': content
        }).then(function (object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}: ${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value = ''
            myForm.querySelector('input[name=name]').value = '' //提交后清除表单内容
        })
    })

}.call()
