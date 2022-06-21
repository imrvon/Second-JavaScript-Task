function Info() {

    // Receive Input from users
    let name = prompt("What is your name?");
    alert(`You're welcome ${name}`);
    let height = parseInt(prompt("What is your height?\nNOTE: Number only"));
    let country = prompt("What is your country?");

// If the user is from Nigeria and is short
    let short_msg = `Your name is ${name}.
You're ${height}ft. tall.
And you have the rotten luck of being from ${country}.
Omo you're short and still from Nigeria. Only you.
Na wa o.`

// If the user is from Nigeria and is tall
let tall_msg = `Your name is ${name}.
You're ${height}ft. tall.
Nothing to brag about, dongo.
Remember you're unfortunate enough to be from ${country}.
So wipe that smirk off your face.`

// If the user is not from Nigeria
    let new_msg = `Your name is ${name}.
You're ${height}ft. tall.
Short o. Tall o. E no matter.
At least you're from ${country}, not Nigeria.
Trust me, it could be worse.`

    if (country === "Nigeria" || "NIGERIA" || "Naija" || "naija" || "NAIJA" && height < 6) {
        alert(short_msg);
    } else if (country === "Nigeria" || "NIGERIA" || "Naija" || "naija" || "NAIJA" && height >= 6) {
        alert(tall_msg);
    } else if (country != "Nigeria" || "NIGERIA" || "Naija" || "naija" || "NAIJA") {
        alert(new_msg);
    }
}

Info();
