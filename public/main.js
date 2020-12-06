let n = 1;
    cssBtn = document.querySelector('#cssBtn'),
    jsBtn = document.querySelector('#jsBtn'),
    xmlBtn = document.querySelector('#xmlBtn'),
    jsonBtn = document.querySelector('#jsonBtn'),
    pageBtn = document.querySelector('#pageBtn'),
    htmlBtn = document.querySelector('#htmlBtn');

pageBtn.onclick = () => {
    let request = new XMLHttpRequest();
    request.open("GET",`/page${n+1}`);
    request.onreadystatechange = ()=>{
        let states = request.readyState,
            stauts = request.status;
        if(states === 4 && stauts === 200){
            const array = JSON.parse(request.response);
            array.forEach(element => {
                const li = document.createElement('li');
                li.textContent = element.id;
                xxx.appendChild(li);
            });
            n +=1;
        }
    }
    request.send();
}

jsonBtn.onclick = () => {
    let request = new XMLHttpRequest();
    request.open("GET","/json.json");
    request.onreadystatechange = ()=>{
        let states = request.readyState,
            stauts = request.status;
        if(states === 4 && stauts === 200){
            let json = request.response,
                obj = JSON.parse(json);
            myName.textContent = obj.name;
        }
    }
    request.send();
}

xmlBtn.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open("GET","/xml.xml");
    request.onreadystatechange = () => {
        let states = request.readyState,
            status = request.status;
        if(states === 4 && status === 200){
            let dom = request.responseXML;
            //注意我的系统此处是null
            console.log(request.responseXML);
            if(null === dom){
                dom = request.response;
                console.log(dom);
            }else{
                let text = dom.getElementsByTagName('waring')[0].textContent;
                console.log(text);
            }
        }  
    }
    request.send();
}    

htmlBtn.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open("GET","/test.html");
    request.onreadystatechange = () =>{
        let states = request.readyState,
            status = request.status;
        if(states === 4 && status === 200){
            let div = document.createElement("div");
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    }
    request.send();
}
jsBtn.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open("GET","/test.js");
    request.onreadystatechange = () =>{
        let states = request.readyState,
            status = request.status;
        if(states === 4 && status === 200){
            let script = document.createElement("script");
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    }
    request.send();
}
cssBtn.onclick = ()=>{
    let request = new XMLHttpRequest();
    request.open("GET","/style.css");
    request.onreadystatechange = () =>{
        let states = request.readyState,
            status = request.status;
        if(states === 4 && status === 200){
            let style = document.createElement("style");
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }
    }
    request.send();
}