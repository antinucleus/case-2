const data = require("./data.json");

const formatJson = () => {
  const output = [];
  let currentBirthDate;
  let birthDate;

  for (const v of data) {
    currentBirthDate = v.birth_date.split(".");
    birthDate = currentBirthDate[1].concat(
      ".",
      currentBirthDate[0],
      ".",
      currentBirthDate[2]
    );

    output.push({
      fullName: v.first_name.concat(v.last_name ? " " : "", v.last_name ?? ""),
      username: v.username,
      power: +v.power,
      birthDate: new Date(birthDate),
    });
  }

  return output;
};

const calculateAverage = () =>
  data.map((d) => +d.power).reduce((p, c) => p + c) / data.length;

console.log("Output: ", formatJson());

console.log("Average Power: ", calculateAverage());
