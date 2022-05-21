## How to make a modal using a dialog box
A modal is a box that will appear either when the page has loaded, or that can be opened and closed using a button or something else to interact with. To make a modal you can use the `<dialog></dialog>` tag. You can also use a `<div></div>` although using dialog has some advantages. When using dialog you can close and open the dialog box using JS, whereas when you use a div you would have to change its display to none when closing it and back to block when opening it. To close a dialog box in JS you can use `.close()` to close the dialog box or `.showModal()` to open the dialog box.
## HTML Setup
The first thing to do is setup your HTML. I simply made a dialog box and a very basic header with a button to open the modal.
```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modal Tutorial</title>

        <link rel="stylesheet" href="index.css">
        <script src="index.js" defer></script>
    </head>

    <body onload="showDialog()">
        <nav>
            <button onclick="openDialog()" id="open">Open</button>
        </nav>

        <div class="container">
            <dialog id="dialog">
                <button onclick="closeModal()">Submit</button>
            </dialog>
        </div>
    </body>
</html>
```
The nav contains my simple header with my button to open the modal. The button has an `onclick()` event that runs the function in my JS to show the modal. The modal itself also contains a button which runs a function that closes the modal.
## Styling with CSS
I did some very basic styling for all of my elements. The main thing to do is position your modal, all the other styling is up to you and won't have any major impact on the function of the modal. Here is my styling for the dialog box and nav.
```
dialog {
    width: 20%;
    height: 20%;
    background-color: #efefef;
    border: 0;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 35%;
    left: 40%;
}

nav {
    width: 100%;
    position: absolute;
    top: 0;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #777;
}
```
## JavaScript
This is the most important part of the modal. The JS allows the modal to properly function, and be opened and closed.
```
const modal = document.getElementById("dialog");

function showDialog() {
    modal.showModal();
    modal.style.display = "flex";
}

function closeModal() {
    modal.close();
    modal.style.display = "none";
}

function openDialog() {
    modal.showModal();
    modal.style.display = "flex";
}
```
I first created a variable called *modal* which gets the dialog box by its ID. The `showDialog()` function is set to run when the page loads. It and the `openDialog()` functions use the `.showModal()` function to show the modal when the page is either loaded, or the button in the nav is clicked. The `closeModal()` function is run when the button in the modal is pressed and uses the `.close()` function which closes the modal.

## References
- [Useful Angle](https://usefulangle.com/post/110/html-dialog-element-to-create-modal-lightbox)
- [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp)
- [Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
