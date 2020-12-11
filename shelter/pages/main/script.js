window.addEventListener('DOMContentLoaded', () => {
    let pets = [];
    let fullPetsList = [];

    const request = new XMLHttpRequest();

    request.open('GET', '../../pets.json');
    request.send();

    request.addEventListener('load', () => {
        pets = JSON.parse(request.response);

        fullPetsList = (() => {
            let tempArr = pets;

            for (let i = tempArr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
            }
            
            /*
            for (let i = 0; i < 6; i++) {
              const newPets = pets;
        
              for (let j = pets.length; j > 0; j--) {
                let randInd = Math.floor(Math.random() * j);
                const randElem = newPets.splice(randInd, 1)[0];
                newPets.push(randElem);
              }
        
              tempArr = [...tempArr, ...newPets];
            }*/
            return tempArr;
        })();

        createPets(fullPetsList);

        const popupList = document.querySelectorAll('.our-friends-button-secondary')
        popupList.forEach((item) => {
            //console.log(item.id)
             
            item.addEventListener('click', () => {
                switch (item.id) {
                    case 'petId0':
                        popup0 = (() => {
                          document.body.style.overflowY="hidden"
                        let d=document.querySelector('.s0');
                        console.log(d)
                        let a=document.querySelector('.x0');
                        console.log(a)
                        d.style.display="flex";
                        a.addEventListener('click', () => { 
                            d.style.display="none";                                 document.body.style.overflowY="unset"
                        }) 
                          
                        })();
                 


                        break
                    case 'petId1':
                        popup1 = (() => {
                            document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s1');
                            console.log(d)
                            let a=document.querySelector('.x1');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";                                 document.body.style.overflowY="unset"
                            }) 
                              
                        })();
                        break
                    case 'petId2':
                        popup2 = (() => {
                            document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s2');
                            console.log(d)
                            let a=document.querySelector('.x2');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";                                 document.body.style.overflowY="unset"
                            }) 
                              
                        })();
                        break
                    case 'petId3':
                        popup3 = (() => {
                            let d=document.querySelector('.s3'); document.body.style.overflowY="hidden"
                     
                            let a=document.querySelector('.x3');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";                                 document.body.style.overflowY="unset"
                            }) 
                              
                        })();
                        break
                    case 'petId4':
                        popup4 = (() => {
                          
                           document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s4');
                            console.log(d)
                            let a=document.querySelector('.x4');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";                                 document.body.style.overflowY="unset"
                            }) 
                              
                        })();
                        break
                    case 'petId5':
                        popup5 = (() => {
                          document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s5');
                            console.log(d)
                            let a=document.querySelector('.x5');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";                                 document.body.style.overflowY="unset"
                            }) 
                              
                             
                        })();
                        break
                    case 'petId6':
                        popup6 = (() => { document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s6');
                            console.log(d)
                            let a=document.querySelector('.x6');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";                                 document.body.style.overflowY="unset"
                            }) 
                              
                          
                        })(); 
                        break
                    case 'petId7':
                        popup7 = (() => {
                          document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s7');
                            console.log(d)
                            let a=document.querySelector('.x7');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";
                                 document.body.style.overflowY="unset"
                            }) 
                              
                        })();
                        break
                }
            })
        })
        
        let slides = document.querySelectorAll('.our-friends-card-list-item');
        let tempArr = [];
        slides.forEach((item) => {
            tempArr = [...tempArr, item]
        });
        const btnNext = document.querySelectorAll('.button-arrow');
        btnNext.forEach((item) => {
            item.addEventListener('click', () => {
                const elem = document.querySelector('.our-friends-card-list-wrap');
                if (elem.style.animation === '') {
                    elem.style.animation = 'myAnimation 1s';
                    setTimeout(() => {
                        elem.style.animation = ''
                    }, 500);
                } else {
                    elem.style.animation = ''
                }
                slides = document.querySelectorAll('.our-friends-card-list-item');
                slides.forEach((item) => {
                    t = [...slides]
                });
                let q = t;
                for (let i = 0; i < 3; i++){
                    q[i].parentNode.appendChild(q[i])
                }
                item.disabled = true;
                setTimeout(function() { item.disabled = false }, 1000); 
            })   
        });
    });

    const burgerMenu = document.querySelector('.header-burger')
    const headerLogo = document.querySelector('.header-logo')
    const mobileConteiner = document.querySelector('.mobile-nav')
    const mobile = document.querySelector('.mobile')
    let i = 0;
    burgerMenu.addEventListener('click', () => {
        if (i % 2 === 0) {
            headerLogo.classList.toggle('displayNone')
            mobile.classList.toggle('mobile-active');
            setTimeout(() => {
                mobileConteiner.classList.toggle('mobile-nav-active')
                burgerMenu.classList.toggle('header-burger-active')
            }, 500);
            document.body.style.overflow = 'hidden'
            i++;
        } else {
            mobileConteiner.classList.toggle('mobile-nav-active')
            burgerMenu.classList.toggle('header-burger-active')
            setTimeout(() => {
                headerLogo.classList.toggle('displayNone')
                mobile.classList.toggle('mobile-active');
            }, 500);
            i++;
            document.body.style.overflow = ''
        }
    })
    mobile.addEventListener('click', (e) => {
        if (e.target === mobile) {
            if (i % 2 === 0) {
                headerLogo.classList.toggle('displayNone')
                mobile.classList.toggle('mobile-active');
                setTimeout(() => {
                    mobileConteiner.classList.toggle('mobile-nav-active')
                    burgerMenu.classList.toggle('header-burger-active')
                }, 500);
                document.body.style.overflow = 'hidden'
                i++;
            } else {
                mobileConteiner.classList.toggle('mobile-nav-active')
                burgerMenu.classList.toggle('header-burger-active')
                setTimeout(() => {
                    headerLogo.classList.toggle('displayNone')
                    mobile.classList.toggle('mobile-active');
                }, 500);
                document.body.style.overflow = ''
                i++;
            }
        }
    })
    

    const createPets = (petsList) => {
        const elem = document.querySelector('.our-friends-card-list-wrap')
        elem.innerHTML += createElements(petsList);
    }
    
   
        createElements = (petsList) => {
            let str = '';
            for (let i = 0; i < petsList.length; i++) {
                str += `
                    <div class="our-friends-card-list-item">
                    <div class="popup s${petsList[i].id}">
                    <div class="popup-item">
                        <div class="popup-content">
                            <div class="popup-close x${petsList[i].id}"><button><img src="../../assets/vector-close.svg" alt=""></button></div>
                            <div class="popup-content-img">
                                <img class="popup-content-img" src="${petsList[i].img}" alt="${petsList[i].name}">
                            </div>
                            <div class="popup-content-description">
                                       <div class="name">${petsList[i].name}</div>
                                <div class="type-and-breed">${petsList[i].type} - ${petsList[i].breed}</div>
                                <div class="text">${petsList[i].description}</div>
                                <ul class="list">
                                    <li class="age"><span>Age: </span>${petsList[i].age}years</li>
                                    <li class="inoculations"><span>Inoculations: </span>${petsList[i].inoculations}</li>
                                    <li class="diseases"><span>Diseases: </span>${petsList[i].diseases}</li>
                                    <li class="parasites"><span>Parasites: </span>${petsList[i].parasites}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                        <img src="${petsList[i].img} " alt="${petsList[i].name}">
                        <div class="our-friends-card-list-item-title">${petsList[i].name}</div>
                        <button id="petId${petsList[i].id}" class="our-friends-button-secondary button-secondary" type="button">Learn more</button>
                    </div>
                `;

            }
            return str; 
        }
})

