module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_Ot9Q9NeMppyOa3ycbOpAGcbFWqzS/kkOCyl7jZf",
      apiToken: "Nx7Q5rnM72h9vlt3RgypyZ0C",
      appFilter: "komponents-backend",
      teamFilter: "Zxly9ROQie9Bu6YN5RuZUJwu",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
