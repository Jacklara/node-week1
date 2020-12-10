
let sum = 0
for (let i = 2; i < process.argv.length; i++) {
    sum = Number(process.argv[i]) + sum
}
console.log(sum);