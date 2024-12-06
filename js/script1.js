async function getProducts(){
    try {
        const response = await fetch('https://crud.teamrabbil.com/api/v1/readProduct');
        const data = await response.json();
        document.querySelector("#output").textContent = JSON.stringify(data);
    }
    catch (error) {
        console.error("Error : ", error);
    }
}

