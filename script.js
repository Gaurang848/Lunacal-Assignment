const imageInput = document.getElementById("image-input");
const imageList = document.querySelector(".lower .image-list");

imageInput.addEventListener("change", (e) => {
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target.result;
      const newImage = document.createElement("img");
      newImage.src = imageData;
      newImage.alt = file.name;
      imageList.appendChild(newImage);
    };
    reader.readAsDataURL(file);
  }
});
