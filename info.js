function Info() {

    let name = prompt("What is your name?");
    console.log(`Okay. You're welcome ${name}`);
    let height = parseInt(prompt("What is your height?\nNOTE: Number only"));
    let country = prompt("What is your country?");

    let newLine = "\r\n"
    let msg = `Your name is ${name}.`
    msg += newLine;
    msg += `You're ${height}ft. tall`
    msg += newLine;
    msg += `And you have the rotten luck of being from ${country}.`

    let new_msg = `Your name is ${name}.`
    new_msg += newLine;
    new_msg += `You're ${height}ft. tall`
    new_msg += newLine;
    new_msg += `At least you're from ${country}, not Nigeria.`

    if (country === "Nigeria") {
        alert(msg);
    } else {
        alert(new_msg)
    }
}

Info();