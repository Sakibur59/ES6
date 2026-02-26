function getHTML(name,age,district){

    const div = `
    <h2>${name}</h2>
    <p>${age}</p>
    <p>${district}</p>
    `
    console.log(div);
}

getHTML("Sakibur",20,"Meherpur")