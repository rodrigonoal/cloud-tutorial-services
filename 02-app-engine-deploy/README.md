# 02 Step Two

Now we will deploy our server using GCP App Engine.

**DISCLAIMER!** Ensure to disable the App Engine once you finish the tutorial. For you to start using GCP, you will need to enable billing. Reckless use may cause a cost overrun. To avoid exceeding your free quota, read [this article](https://cloud.google.com/appengine/quotas) carefully and proceed at your own risk.

### In addition to the prior steps, we will need:
- A project in our GCP account with Cloud Build API enabled
- Cloud SDK installation and initialization
- Environment variables for the GCP App Engine port
- A app.yaml file to specify the runtime
- A .gcloudignore fo specify which files not to upload

### This example shows:
- How to set the basic configuration of an App Engine

### Resources:
- [How to set up Cloud SDK](https://cloud.google.com/sdk/docs/install)
- [App Engine Documentation](https://cloud.google.com/appengine/docs)

### Useful Commands
```bash
# this tells gcloud which project you are working on
gcloud config set project <PROJECT_ID>

# this lets you set a default region
gcloud config set run/region <REGION>

# to build and deploy with app engine 
gcloud app deploy

# observation: at that point gcloud may ask you to enable cloudbuild - accept with y

# to get app engine url
gcloud app browse
```

Working at https://nodeapp-328211.rj.r.appspot.com/