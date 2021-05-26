// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener('click', clearItems);


// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && editFlag === false) {
    const element = document.createElement('article');
    // add class
    element.classList.add('grocery-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="submit" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="submit" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert('item successfuly added to the list', 'success');
    // show container
    container.classList.add('show-container')
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== '' && editFlag === true) {
    console.log('editing')
  } else {
    displayAlert('please enter value', 'danger')
  }
}
// display alert
function displayAlert(text,action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  },1000)
}
// clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }

  container.classList.remove('show-container');
  displayAlert('emty list', 'danger');
  setBackToDefault();
  // localStorage.removeItem('list');
}

// delete function
function deleteItem() {
  console.log('item deleted');
}
// edit function
function editItem() {
  console.log('edit item');
}
// set back to default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value) {
  console.log('added to local storage')
}
// ****** SETUP ITEMS **********
