let imageURL;

function submitHandler(){
    console.log("click");
    const fileInput = document.getElementById('fileInput');
    console.log(fileInput.files);
    const image = fileInput.files[0];

    // Multipart file
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = 'PxWVUKAN81TYHKrJvXgoWMWy';

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': apiKey
        },
        body: formData
    })
    .then(function(response){
        return response.blob()
    })
    .then(function(blob){
        console.log(blob);
        const url = URL.createObjectURL(blob);
        imageURL = url;
        const img = document.getElementById('resultImage');
        img.src = url;
        img.style.display = 'block';
    })
    .catch();
}

function downloadFile(){
    var anchorElement = document.createElement('a');
    anchorElement.href = imageURL;
    anchorElement.download = 'Removed_Background.png';
    document.body.appendChild(anchorElement);

    anchorElement.click();

    document.body.removeChild(anchorElement);
}

