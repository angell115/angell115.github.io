

 function changeThese()
    {
         let title = document.getElementById("top");
         let name = document.getElementById("name");
        title.textContent = "Hello, " + name.value + "!!!";

        let label = document.getElementById("label");
        let brief = document.getElementById("brief");
        label.textContent =  brief.value;

        let options = document.getElementById("options");
        options.innerHTML =  "<option value='green'>green</option><option value='red'>red</option><option value='blue'>blue</option>";
        let body = document.getElementById("body");
        body.style.backgroundColor = options.value;

       





    }