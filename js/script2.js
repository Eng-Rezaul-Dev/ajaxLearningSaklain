async function sendDataToBackend() {
    try {
        const body = {
            Img: "",
            ProductCode : document.getElementById('productCode').value,
            ProductName : document.querySelector('#productName').value,
            Qty : document.querySelector('#qty').value,
            TotalPrice : "",
            UnitPrice : document.querySelector('#unitPrice').value
        };
        const response= await fetch('https://crud.teamrabbil.com/api/v1/createProduct',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(body)
        });
        const data = await response.json();
        document.getElementById('output2').textContent = JSON.stringify(data);
    }
    catch (error) {
        console.error("Error : ", error);
    }
}