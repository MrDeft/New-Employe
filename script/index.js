const closeBtn = document.querySelector('#close');
const submit = document.querySelector('#submit');
const editBtn = document.querySelectorAll('.edit-employe')
const dellBtn = document.querySelectorAll('.dell-employe')
const closeEditBtn = document.querySelector('#close-edit')
const saveEditBtn = document.querySelector('#save-edit')
const tbody = document.querySelector('tbody');
const dataArray = [];
// localStorage.setItem('items', JSON.stringify(itemsArray));

// From control show and hide
const addBtn = document.querySelector('#add-new-btn');
addBtn.addEventListener('click', () => {
    document.querySelector('.form__control').classList.add('open__form')
    document.querySelector('.form__control').classList.remove('close__form')
});
closeBtn.addEventListener('click', () => {
    document.querySelector('.form__control').classList.add('close__form')
    document.querySelector('.form__control').classList.remove('open__form')
});

// Add element function
submit.addEventListener('click', addEmployees);
function addEmployees() {
    let fullName = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let city = document.getElementById('city').value;
    let department = document.querySelector('#select').value;
    // let dataObj = {  }
    let dataObj = { fullName, email, phone, city, department }
    const tr = document.createElement('tr');
    tr.classList.add('tr')


    // Error and Success Border
    if (fullName != '' && email != '' && phone != '' && city != '' && department != '') {
        dataObj = {
            fullName: fullName,
            email: email,
            phone: phone,
            city: city,
            department: department
        }

        dataArray.push(dataObj);

        // Add employe data to tbody
        for (let i = 0; i < dataArray.length; i++) {
            tr.innerHTML =
                `
                <tr>
                    <td class='td'>${dataArray[i].fullName}</td>
                    <td class='td'>${dataArray[i].city}</td>
                    <td class='td'>${dataArray[i].phone}</td>
                    <td class='td'>${dataArray[i].department}</td>
                    <td class='td'>
                        <div class='t__btn'>
                            <button class='edit-employe'><i class='bx bx-pencil' ></i></button>
                            <button class="dell-employe"><i class='bx bx-plus'></i></button>
                        </div>
                    </td>
                </tr>
            `
        }
        tbody.appendChild(tr)
    } else {

        if (fullName == '') {
            document.getElementById('full-name').classList.add('error');
        } else {
            document.getElementById('full-name').classList.remove('error');
        }

        if (email == '') {
            document.getElementById('email').classList.add('error');
        } else {
            document.getElementById('email').classList.remove('error');
        }

        if (phone == '') {
            document.getElementById('phone').classList.add('error');
        } else {
            document.getElementById('phone').classList.remove('error');
        }

        if (city == '') {
            document.getElementById('city').classList.add('error');
        } else {
            document.getElementById('city').classList.remove('error');
        }

        if (department == '') {
            document.getElementById('select').classList.add('error');
        } else {
            document.getElementById('department').classList.remove('error');
        }
    }

    // localStorage.setItem('items', JSON.stringify(itemsArray));
    // const data = JSON.parse(localStorage.getItem('items'));
    // localStorage.setItem('items', JSON.stringify(itemsArray));


    // console.log(dataArray);
    // console.log(dataObj);
}

tbody.addEventListener('click', eventEmployees)
function eventEmployees(e) {
    e.preventDefault();
    if (e.target.parentElement.classList[0] == 'dell-employe') {
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
    }
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement);
    else if (e.target.parentElement.classList[0] == 'edit-employe') {
        document.querySelector('.form__edit').classList.add('show__form-edit')
        document.querySelector('.form__edit').classList.remove('hide__form-edit')
    }
}

// Close Edit Form
closeEditBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.form__edit').classList.add('hide__form-edit')
    document.querySelector('.form__edit').classList.remove('show__form-edit')
})

// Show Edit Form
// editBtn.addEventListener('click', () => {
    
// })