document.querySelector('#attempt').setAttribute('hidden', 'true');

let again = document.querySelector("#continue")

again.setAttribute("hidden", 'true');

let input= document.querySelector('#input');








let random_value= 56;

let add_node = document.querySelector("#append");


let i=0;

let compare=()=>{
    let input_value = input.value; 

    if(input_value == random_value){
        let new_node= document.createElement('div');
        new_node.style.fontSize='2rem'
        new_node.style.color='black'
        new_node.innerHTML= "Ooh Awesome Congrats!!!"

        add_node.appendChild(new_node);


        
        input.value='';
        input.disabled= true;


        again.removeAttribute('hidden');

        let yes = document.querySelector("#yes");

        yes.addEventListener('click', ()=>{
            location.reload();
        })

        let no = document.querySelector("#no");

        no.addEventListener('click', ()=>{
            window.location.assign("index1.html")
        })

        input.value='';

    }

    else{
        i++;
        let new_node = document.createElement('p');
        new_node.innerHTML='Sorry! Try again';
        add_node.appendChild(new_node)
        new_node.style.fontSize='1.5rem';
        new_node.style.color='black'
        new_node.style.padding='0.5rem'

        input.value='';

        input.disabled=(i>=3);

        if(i>=3){


        document.querySelector('#attempt').removeAttribute('hidden');

        

    }




    }
}

input.addEventListener('keypress', (e)=>{
    if(e.keyCode ===13 || e.key ==='Enter'){

       compare(); 
    
    }
})


