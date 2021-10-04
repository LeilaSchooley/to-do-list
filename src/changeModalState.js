import {
    checkForElementID
} from "./queryElements"

function changeModalState(formName) {

    let modal = document.getElementById(formName);

    // Get the button that opens the modal
    let span = document.querySelector(`.${formName}-close`);

    // When the user clicks on <span> (x), close the modal
    span.onclick = () => removeAllModals();

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target == modal)
            removeAllModals();

    };

}

function setdisplayBlock(formName) {
    let modal = document.getElementById(formName);

    modal.style.display = "block";
}

function removeAllModals() {
    let allModals = document.querySelectorAll(".side-panel");
    allModals.forEach(element => document.body.removeChild(element.parentNode))


    if (!checkForElementID("editForm")) {
        let editModal = document.getElementById("editForm")
        editModal.parentNode.removeChild(editModal)

    }

}


export {
    changeModalState,
    setdisplayBlock
}