    // 1. Change Text by ID
    function changeTitle() {
      document.getElementById("title").innerText = "Welcome to My Page";
    }

    // 2. Change Background by Class
    function changeHighlightBg() {
      let highlights = document.getElementsByClassName("highlight");
      for (let i = 0; i < highlights.length; i++) {
        highlights[i].style.backgroundColor = "yellow";
      }
    }

    // 3. Hide an Element by ID
    function hideBox1() {
      document.getElementById("box1").style.display = "none";
    }

    // 4. Increase Font Size of Class Elements
    function increaseFontSize() {
      let notes = document.getElementsByClassName("note");
      for (let i = 0; i < notes.length; i++) {
        notes[i].style.fontSize = "24px";
      }
    }

    // 5. Set Image Width by ID
    function resizeProfilePic() {
      document.getElementById("profilePic").style.width = "200px";
    }

    // 6. Toggle Visibility
    function toggleItems() {
      let items = document.getElementsByClassName("item");
      for (let i = 0; i < items.length; i++) {
        if (items[i].style.display === "none") {
          items[i].style.display = "inline-block";
        } else {
          items[i].style.display = "none";
        }
      }
    }

    // 7. Apply Different Colors
    function applyBoxColors() {
      let colors = ["red", "green", "blue", "orange", "purple"];
      let boxes = document.getElementsByClassName("box");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i % colors.length];
      }
    }

    // 8. Add Border
    function addBorder() {
      let frames = document.getElementsByClassName("frame");
      for (let i = 0; i < frames.length; i++) {
        frames[i].style.border = "2px solid black";
      }
    }

    // 9. Count Items
    function countItems() {
      let items = document.getElementsByClassName("item");
      alert("Total items: " + items.length);
    }

    // 10. Make All Text Uppercase
    function makeUppercase() {
      let items = document.getElementsByClassName("item");
      for (let i = 0; i < items.length; i++) {
        items[i].innerText = items[i].innerText.toUpperCase();
      }
    }
