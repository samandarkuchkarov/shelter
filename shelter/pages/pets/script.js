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

            for (let i = 0; i < 5; i++) {
              const newPets = pets;
        
              for (let j = pets.length; j > 0; j--) {
                let randInd = Math.floor(Math.random() * j);
                const randElem = newPets.splice(randInd, 1)[0];
                newPets.push(randElem);
              }
        
              tempArr = [...tempArr, ...newPets];
            }
            return tempArr;
        })();

        fullPetsList = sort863(fullPetsList);
        createPets(fullPetsList);
        console.log(fullPetsList)

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
                                d.style.display="none";
                                document.body.style.overflowY="unset"
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
                                d.style.display="none";
                                document.body.style.overflowY="unset"
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
                                d.style.display="none";
                                document.body.style.overflowY="unset"
                            }) 
                              
                        })();
                        break
                    case 'petId3':
                        popup3 = (() => {
                            document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s3');
                            console.log(d)
                            let a=document.querySelector('.x3');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";
                                document.body.style.overflowY="unset"
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
                                d.style.display="none";
                                document.body.style.overflowY="unset"
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
                                d.style.display="none";
                                document.body.style.overflowY="unset"
                            }) 
                              
                             
                        })();
                        break
                    case 'petId6':
                        popup6 = (() => {
                            document.body.style.overflowY="hidden"
                            let d=document.querySelector('.s6');
                            console.log(d)
                            let a=document.querySelector('.x6');
                            console.log(a)
                            d.style.display="flex";
                            a.addEventListener('click', () => { 
                                d.style.display="none";
                                document.body.style.overflowY="unset"
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

    });

    const burgerMenu = document.querySelector('.header-burger')
    const headerLogo = document.querySelector('.header-logo')
    const headerWrap = document.querySelector('.header-wrap')
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
            headerWrap.style.position = 'static';
            i++;
        } else {
            mobileConteiner.classList.toggle('mobile-nav-active')
            burgerMenu.classList.toggle('header-burger-active')
            setTimeout(() => {
                headerLogo.classList.toggle('displayNone')
                mobile.classList.toggle('mobile-active');
            }, 500);
            i++;
            document.body.style.overflow = '';
            headerWrap.style.position = 'sticky';
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
                headerWrap.style.position = 'static';
                i++;
            } else {
                mobileConteiner.classList.toggle('mobile-nav-active')
                burgerMenu.classList.toggle('header-burger-active')
                setTimeout(() => {
                    headerLogo.classList.toggle('displayNone')
                    mobile.classList.toggle('mobile-active');
                }, 500);
                document.body.style.overflow = ''
                headerWrap.style.position = 'sticky';
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
                                <li class="age"><span>Age: </span>${petsList[i].age}</li>
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

    const sort863 = (list) => {
        let unique8List = [];
        let length = list.length;
        for (let i = 0; i < length / 8; i++) {
            const uniqueStepList = [];
            for (j = 0; j < list.length; j++) {
                if (uniqueStepList.length >= 8) {
                    break;
                }
                const isUnique = !uniqueStepList.some((item) => {
                    return item.name === list[j].name;
                });
                if (isUnique) {
                    uniqueStepList.push(list[j]);
                    list.splice(j, 1);
                    j--;
                }
            }
            unique8List = [...unique8List, ...uniqueStepList];
        }
        list = unique8List;
        //list = sort6recursively(list);
        return list;
    }
    /*
    const sort6recursively = (list) => {
        const length = list.length;
        for (let i = 0; i < (length / 6); i++) {
            const stepList = list.slice(i * 6, (i * 6) + 6);
            for (let j = 0; j < 6; j++) {
                const duplicatedItem = stepList.find((item, ind) => {
                    return item.name === stepList[j].name && (ind !== j);
                });
      
                if (duplicatedItem !== undefined) {
                    const ind = (i * 6) + j;
                    const which8OfList = Math.trunc(ind / 8);
      
                    list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);
                    sort6recursively(list);
                }
            }
        }
        return list;
    }*/
    const next = document.querySelector('.next')
    const next2 = document.querySelector('.next2')
    const prev = document.querySelector('.prev')
    const prev2 = document.querySelector('.prev2')
    const petsConteiner = document.querySelector('.our-friends-card-list-wrap')
    let currentPage = 0;
    let maxPage = 24
    console.log(petsConteiner.offsetHeight)
    console.log(maxPage)
    
    const check = () => {
        if(currentPage === 0){
            prev.disabled = true;
            prev2.disabled = true;
        } else {
            prev.disabled = false;
            prev2.disabled = false;
        }
        if ( currentPage >= maxPage) {
            next.disabled = true;
            next2.disabled = true;
        } else {
            next.disabled = false;
            next2.disabled = false;
        }
        console.log(maxPage)
        console.log(currentPage)
    }
    check();
    
    next.addEventListener('click', () => {
        console.log(petsConteiner.offsetHeight);
        if (currentPage < (petsConteiner.offsetHeight / 930) - 1) {
            currentPage++;
            console.log(currentPage+1);
            maxPage = Math.trunc(petsConteiner.offsetHeight / 930)
            petsConteiner.style.transform = `translateY(-${930 * currentPage}px)`;
            document.querySelector(".our-friends-content-tabs-button-active").innerText = (currentPage+1).toString();
        } 
        check();
    })
    next2.addEventListener('click', () => {
        currentPage = Math.trunc(petsConteiner.offsetHeight / 930) 
        maxPage = Math.trunc(petsConteiner.offsetHeight / 930) 
        check();
        console.log(petsConteiner.offsetHeight);
        petsConteiner.style.transform = `translateY(-${930 * currentPage}px)`;
        document.querySelector(".our-friends-content-tabs-button-active").innerText = (currentPage+1).toString();
    })
    prev.addEventListener('click', () => {
        console.log(petsConteiner.offsetHeight);
        if (currentPage < (petsConteiner.offsetHeight / 930) ) {
            currentPage--;
            console.log(currentPage+1);
            petsConteiner.style.transform = `translateY(-${930 * currentPage}px)`;
            document.querySelector(".our-friends-content-tabs-button-active").innerText = (currentPage+1).toString();
        } 
        check();
    })
    prev2.addEventListener('click', () => {
        currentPage = 0;
        check();
        console.log(petsConteiner.offsetHeight);
        petsConteiner.style.transform = `translateY(-${930 * currentPage}px)`;
        document.querySelector(".our-friends-content-tabs-button-active").innerText = (currentPage+1).toString();
    })
})



