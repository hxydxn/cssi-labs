const getMessages = () => {
    const messagesRef = firebase.database().ref();
        messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        //console.log(data);

        const passcodeAttempt = document.querySelector("#passcode").value;


        for (const recordKey in data){
            //console.log(recordKey);
            //console.log(data[recordKey]);

            const record = data[recordKey];

            const storedPasscode = record.passcode;

            if(passcodeAttempt === storedPasscode) {
                console.log(`Message is: ${record.message}`);
                renderMessageAsHtml(record.message);
            }
            else{
                const messageDisplay = document.querySelector("#message");
                messageDisplay.innerHTML = "INCORRECT PASSCODE";
            }
        }
    });
}

const renderMessageAsHtml = (message) => {
    const passCodeInput = document.querySelector("#passcode");
    passCodeInput.value = "";

    const messageDisplay = document.querySelector("#message");
    messageDisplay.innerHTML = message;
}