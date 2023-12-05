module.exports = {
  apps: [
    {
      name: "komponents-backend",
      script: "pnpm start",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
