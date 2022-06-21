function Info() {

    let name = prompt("What is your name?");
    alert(`You're welcome ${name}`);
    let height = parseInt(prompt("What is your height?\nNOTE: Number only"));
    let country = prompt("What is your country?");

    let short_msg = `Your name is ${name}.
You're ${height}ft. tall.
And you have the rotten luck of being from ${country}.
Omo you're short and still from Nigeria. Only you.
Na wa o.`

let tall_msg = `Your name is ${name}.
You're ${height}ft. tall.
Nothing to brag about, dongo.
Remember you're unfortunate enough to be from ${country}.
So wipe that smirk off your face.`

    let new_msg = `Your name is ${name}.
You're ${height}ft. tall.
Short o. Tall o. E no matter.
At least you're from ${country}, not Nigeria.
Trust me, it could be worse.`

    if (country === "Nigeria" || "NIGERIA" || "Naija" || "naija" || "NAIJA" && height < 6) {
        alert(short_msg);
    } else if (country === "Nigeria" || "NIGERIA" || "Naija" || "naija" || "NAIJA" && height >= 6) {
        alert(tall_msg);
    } else {
        alert(new_msg);
    }
}

Info();