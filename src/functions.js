export let rsvpSubmitIsDisabled = function (
    name,
    email,
    phone,
    numGuests,
    guestMeals,
    transportation
) {
    let arrayHasNull = false;
    for (let i = 0; i < numGuests; i++) {
        if (guestMeals[i].name == null || guestMeals[i].meal == null) {
            arrayHasNull = true;
        }
    }

    let n = name == "" || name == null;
    let e = email == "" || email == null;
    let p = phone == "" || phone == null;
    let g = numGuests < 1 || numGuests == undefined;
    let t = transportation == null;
    if (n || e || p || g || t || arrayHasNull) {
        return true;
    } else {
        return false;
    }
};

export let emailListSubmitIsDisabled = function(name, email) {
    if (name == "" || email == "" || name == null || email == null) {
        return true;
    } else {
        return false;
    }
}
