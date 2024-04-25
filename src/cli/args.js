const parseArgs = () => {
  const args = [];
  process.argv.forEach((it, index) => {
    if (it.startsWith('--')) {
      args.push(`${it.slice(2)} is ${process.argv[index + 1]}`);
    }
  })
  console.log(args.join(', '));
};

parseArgs();