
let menu = document.querySelector('.nav__menu');
    menuItems = document.querySelectorAll('.menu__item');
    itemSkills = document.getElementById('skills');
    setionItems = document.querySelectorAll('._subsection');
    sectionItemTitle = document.querySelectorAll('._subsection__title');
   

    menuItems.forEach(element => {

        element.addEventListener('click',()=>{
            
            // console.log(sectionItemTitle);
            let elementId = element.textContent.toLowerCase().replace(/\s+/g, " ").trim();

            sectionItemTitle.forEach(title =>{
                title.style.removeProperty('color');
                let titleID = title.textContent.toLowerCase().replace(/\s+/g, " ").trim();
                // console.log(element);
                console.log(titleID);
                console.log(elementId);
                if (titleID == elementId){
                   
                    title.style.color = '#bf9430';
                    return;
                }
            })
            
            // document.getElementById(elementId).style.color = 'red';
            
            
        })
    });
    // menuItems.addEventListener('click',(item)=>{

    //     let(i = 0; i<menuItems.length; i++){
            
    //         let( o = 0; o < setionItems.length; o++){
    //             if(menuItems[i].textContent.toLowerCase() == setionItems[o].id){
    //                 console.log(element);
    //             }
    //         }
    // }
    // })
    
   