import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function dagenInMaand(maand, jaar) {
  const dagenPerMaand = [31, isLeapYear(jaar) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (maand < 1 || maand > 12) {
    return "Ongeldige maand. Kies een maand tussen 1 en 12.";
  }

  return dagenPerMaand[maand - 1];
}

async function main() {
  try {
    const maand = parseInt(await userInput.question("Voer een maand in (1-12): "));
    const jaar = parseInt(await userInput.question("Voer een jaar in: "));
    
    const dagen = dagenInMaand(maand, jaar);
    console.log(`Aantal dagen in maand ${maand} van jaar ${jaar}: ${dagen}`);
  } catch (error) {
    console.error("Er is iets misgegaan:", error);
  } finally {
    userInput.close();
    process.exit();
  }
}

main();
