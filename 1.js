let bio = {
    name: "Dyah Noorcholisa",
    age: 20,
    address: "Jl. Kp. Panjang Citayam, Depok",
    hobbies: ["writing", "basketball"],
    is_married: false,
    list_school: [
        {name: "SMAN 65 Jakarta", year_in: 2014, year_out: 2017},
        {name: "Universitas Bakrie", year_in: 2017}
    ],
    skills: [
        {skill_name: "writing", level: "beginner"},
        {skill_name: "javascript", level: "beginner"}
    ]
}

let biodata = JSON.stringify(bio);
console.log(biodata);