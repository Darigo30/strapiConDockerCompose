# Strapi CI/CD pipeline

<a href="https://dash.elest.io/deploy?source=cicd&social=dockerCompose&url=https://github.com/elestio-examples/strapi"><img src="deploy-on-elestio.png" alt="Deploy on Elest.io" width="180px" /></a>

Deploy Strapi with CI/CD on Elestio

<img src="strapi.png" style='width: 100%;'/>
<br/>
<br/>

# Once deployed ...

You can open Strapi UI here:

    URL: https://[CI_CD_DOMAIN]/admin
    email: [ADMIN_EMAIL]
    password: [ADMIN_PASSWORD]

You can open pgAdmin web UI here:

    URL: https://[CI_CD_DOMAIN]:8443
    email: [ADMIN_EMAIL]
    password: [ADMIN_PASSWORD]

# Plugins

You can install your plugins by adding `yarn command` in the `entrypoint.sh` file.

for example:

**_step1:_** go to the Tools tab, click on VS Code button, copy the password, and click on Access link, then paste the password

**_step2:_** go to the entrypoint.sh, and paste your `yarn command` ⚠️One command per line⚠️

**_step3:_** go back to Elestio Dashboard, Details tab, and click to Restart Stack

# Production

By default, you deploy a development version.
You can easily switch between a production version or a development version like this:

**_step1:_** update the env var to indicate which version you want.
Open Elestio dashboard > Service overview > click on UPDATE CONFIG button > ENV tab
update the variable `NODE_ENV` from `development` to `production` or revert

**_step2:_** click on Update & Restart button.
