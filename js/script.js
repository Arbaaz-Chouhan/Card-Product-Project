const mainContainer = AddCreatElement("div", "class", "mainContainer", document.body, null, null, null);
const form = AddCreatElement("form", "class", "myform", mainContainer);
const MRP = AddCreatElement("input", "type", "number", form, null, "MRP");
const productName = AddCreatElement("input", "type", "text", form, null, "ProductName");
const productPrice = AddCreatElement("input", "type", "number", form, null, "ProductPrice");
const productQuantity = AddCreatElement("input", "type", "number", form, null, "productQuantity");
const formSubmit = AddCreatElement("button", "class", "mainSumbit", form, "Sumbit", null, "Submit");

function AddCreatElement(tag, attType, attName, parent, text, placeholder, value) {
    const element = document.createElement(tag);

    if (!!attType && attName) {
        element.setAttribute(attType, attName);
    }

    if (!!parent) {
        parent.append(element);
    }

    if (!!text) {
        element.innerText = text;
    }

    if (!!placeholder) {
        element.setAttribute("placeholder", placeholder);
    }

    if (!!value) {
        element.value = value;
    }



    return element;
}

let editedCard = null;

mainContainer.addEventListener("click", eventFunction);

function eventFunction(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "click") {
        if (e.target.tagName !== "BUTTON") {
            return;
        }

        if (e.target.value === "Submit") {
            const productContainer = AddCreatElement("div", "class", "productContainer", mainContainer);
            const Card = AddCreatElement("div", "class", "cardContainer", productContainer);
            const Mrp = AddCreatElement("h3", "class", "Mrp", Card, `MRP : ${MRP.value}`);
            const name1 = AddCreatElement("h3", "class", "ProductName", Card, `Product Name : ${productName.value}`);
            const price = AddCreatElement("h3", "class", "price", Card, `Price : ${productPrice.value} only`);
            const quantity = AddCreatElement("h3", "class", "ProductQuantity", Card, `Quantity : ${productQuantity.value}`);
            const buttonContainer = AddCreatElement("div", "class", "btnContainer", Card);
            const editbtn = AddCreatElement("button", "class", "editbtn", buttonContainer, "Edit", null, null);
            const deletebtn = AddCreatElement("button", "class", "deletebtn", buttonContainer, "Delete", null, null);

            MRP.value = "";
            productPrice.value = "";
            productName.value = "";
            productQuantity.value = "";
        }

        if (e.target.textContent === "Edit") {
           editedCard = e.target.closest(".cardContainer");


            const existingPopup = document.querySelector(".popupContainer");
            if (!existingPopup) {
                const popupContainer = AddCreatElement("div", "class", "popupContainer", mainContainer, null, null, null);
                const closeBtn = AddCreatElement("button", "class", "closeBtn", popupContainer, "X", null, null);
                const popupForm = AddCreatElement("form", "class", "popupForm", popupContainer, null, null, null);
                const popupMrp = AddCreatElement("input", "type", "number", popupForm, null, "MRP", null);
                const popupName = AddCreatElement("input", "type", "text", popupForm, null, "ProductName", null);
                const popupprice = AddCreatElement("input", "type", "number", popupForm, null, "ProductPrice", null);
                const popupQuantity = AddCreatElement("input", "type", "number", popupForm, null, "Qunatity", null);
                const popupSubmitBtn = AddCreatElement("button", "class", "popupSubmitBtn", popupForm, "submit", null, "submit");
            }
        }

        if (e.target.textContent === "Delete") {
            const editedCard = e.target.closest(".productContainer");
            editedCard.remove(editedCard);
        }
        if (e.target.classList[0] === "popupSubmitBtn") {
            const popupForm = e.target.closest(".popupForm");

            editedCard.querySelector(".Mrp").innerText = `MRP: ${popupForm.children[0].value}`;
            editedCard.querySelector(".ProductName").innerText = `Name :${popupForm.children[1].value}`;
            editedCard.querySelector(".price").innerText = `Price: only ${popupForm.children[2].value}`;
            editedCard.querySelector(".ProductQuantity").innerText = `Quantity : ${popupForm.children[3].value}`;

            const popupContainer = e.target.closest(".popupContainer");
            popupContainer.remove();
        }

        if (e.target.innerText === "X") {
            const popupContainer = e.target.closest(".popupContainer");
            popupContainer.remove();
        }

    }
}





