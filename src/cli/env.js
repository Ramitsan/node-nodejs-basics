const parseEnv = () => {
  const prefix = 'RSS_';
  const envVariables = Object.entries(process.env)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, value]) => `${key}=${value}`)
    .reverse()
    .join('; ');

  console.log(envVariables);
};

parseEnv();