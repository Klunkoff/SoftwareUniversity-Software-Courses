function solve(input) {

  let incomePassword = input[0];
  let password = "s3cr3t!P@ssw0rd";

  if (incomePassword !== password) {
    console.log("Wrong password!");
  } else {
    console.log("Welcome");
  }
}

solve(["sfdgdg"]);
