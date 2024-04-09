function CreateTextFile() {
    
    var name = document.getElementById("nombre").value

    const d = new Date();
    var date = d.toDateString();

    var format = formater(name)


  var message1 =

`¡Hola ${name}!

Has obtenido una calificación de ${grade} puntos.

Respondiste correctamente a ${score} preguntas y ${negScore} incorrectas. Completaste el ejercicio en un ${fina100score}%.
Observé algunos detalles en los siguientes ejercicios:\n
${Object.keys(verbosMistakes)}
  `
var authenticityMessage = `Nombre: ${name}\nCalificación: ${grade}\nRespuestas correctas:${score}\nRespuestas incorrectas:${negScore}\n Progreso: ${fina100score}%\nFecha:${date}\n Ejercicio: ${tense}`



    // var message1 = `${name}, debes terminar el ejercicio.\n\nHas completado un ${fina100score}%\n\n¡Sigue practicando!`
    // var message2 = `¡${name}!\n\n¡Obtuviste ${grade} pts!\n${score} correctas y ${negScore} incorrecta(s)\n\n\nObservé algunos detalles en los siguientes ejercicios:\n\n  ${Object.keys(verbosMistakes)}\n\nLa práctica continua te ayudará a perfeccionarlos.\n `
    // var message3 = `¡${name}, lo has hecho perfecto!\n\n¡Obtuviste ${grade} pts sin ningún error!\n\n Practicate ${score} verbos`
    var practiceMessage = `\n\nFecha: ${date} Ejercicio: ${tense} \n\n`
    var finalmessage ="dd0";

    const objKeys = Object.values(mythical)

    // 8 is the number of keys in the json and (d.getDay()+1) is 7 which is the number of days
    var picture = objKeys[d.getDay()];

    // if (fina100score >= 300){
    //     if (negScore === 0){
    //         finalmessage = format +  message3 + practiceMessage + "\n" + picture
    //     }
    //     else {
    //         finalmessage = format + message2 + practiceMessage + "\n" + picture
    //     }
    // }
    // else if (fina100score >= 100){
    //     if (negScore === 0){
    //         finalmessage = format +  message3 + practiceMessage
    //     }
    //     else {
    //         finalmessage = format + message2 + practiceMessage
    //     }
    // }
    // else {
        finalmessage = format + message1 + practiceMessage

       var MyEncryptedReport =  encryptReport(authenticityMessage)

       var finaMessageWithEncryptedReport = `${finalmessage} \n\nIntegrity Verification Key: ${MyEncryptedReport}`;



    // var encryptedAES = CryptoJS.AES.encrypt(finalmessage, "My key");
    // var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "My key");
    // var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);

    //    alert(encryptedAES)
    // }

    var blob = new Blob([finaMessageWithEncryptedReport], {
        type: "text/plain;charset=utf-8",
    });


    // var confirmMessage = "Your progress will get eraser"

    if (confirm(`Please ensure your name is accurately entered. Once confirmed, your name cannot be edited.\n\nName: ${name}`) == true) {
        document.getElementById('nombre').disabled = true;
        saveAs(blob, "download.txt");
    }
    
    // confirm("Make sure your name is correct. Once you confirm this, you won't be able to edit your name") {
    //    
    //     
    // }

}
