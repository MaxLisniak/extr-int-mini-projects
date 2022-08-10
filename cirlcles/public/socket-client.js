
// The current position of mouse
let x = 0;
let y = 0;

const socket = io();

// Query the element
const ele = document.querySelector("#item");

// Handle the mousedown event
// that's triggered when user drags the element
const mouseDownHandler = function (e) {
  // Get the current mouse position
  x = e.clientX;
  y = e.clientY;

  // Attach the listeners to `document`
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = async function (e) {

  //Calculate the difference 
  const dx = e.clientX - x;
  const dy = e.clientY - y;

  // Set the position of element
  ele.style.top = `${ele.offsetTop + dy}px`;
  ele.style.left = `${ele.offsetLeft + dx}px`;

  // Reassign the position of mouse
  y = e.clientY;
  x = e.clientX;

  socket.emit('move', { x: ele.style.left, y: ele.style.top });

};

const mouseUpHandler = function () {
  // Remove the handlers of `mousemove` and `mouseup`
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
};

ele.addEventListener('mousedown', mouseDownHandler);



// setInterval(async function () {
//   // For elements that're not being dragged get coordinates from the 
//   // server and update their own
//   if (!dragging) {
//     await fetch('http://localhost:3000')
//       .then(results => results.json())
//       .then(fetched => {

//         ele.style.top = `${fetched.y}px`;
//         ele.style.left = `${fetched.x}px`;

//       })
//   }

// }, 25);

socket.on('move', function (coordinates) {

  ele.style.top = `${coordinates.y}`;
  ele.style.left = `${coordinates.x}`;

});