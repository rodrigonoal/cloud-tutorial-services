# 03 Step Three

Now the path splits! The same application from step two will be modified to fit Cloud Run. We are also taking a look at how gcloud manages authorization policies for developers.

### For this you WON'T need:
- The App Engine configuration file: app.yaml

### In addition to the prior steps, we will need:
- To containerize our application with a Dockerfile
- To build and store our container on GCP Container Registry
- To control access to our application using per-service IAM

### This example shows:
- How to set the basic configuration of a Cloud Run
- How to give access to a service user by adding IAM policy binding

### Resources:
- [Docker in 100 Seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ)
- [How to Dockerize a Node.js App](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Cloud Run vs. App Engine](https://dev.to/pcraig3/cloud-run-vs-app-engine-a-head-to-head-comparison-using-facts-and-science-1225)
- [What is Bearer token and How it Works](https://www.devopsschool.com/blog/what-is-bearer-token-and-how-it-works/)

### Useful Commands
```bash
# do not forget to switch projects if you wish to do so!

# ATENTION! we will start by deploying our app without any authentication

# this builds our container and publishes on Container Registry
gcloud builds submit --tag gcr.io/<PROJECT_ID>/<APP_NAME>:<PROJECT_VERSION>

# this deploys our app
gcloud run deploy --image gcr.io/<PROJECT_ID>/<APP_NAME>:<PROJECT_VERSION>

# after that, we will add some authentication
# for that, we will need to grant permission to an user
# use the email you chose for your GCP acount and run this command:
gcloud run services add-iam-policy-binding <SERVICE_NAME>\
  --member='user:<EMAIL>' \
  --role='roles/run.invoker'

# now go to the cloud console and disable Cloud Run Invoker role for all users
# try to access your service's url - you will be unable to. You just made your service private
# for your API to accept requests, you will need to add your token to your HTTP Headers

# to access your identity token, you can use this
gcloud auth print-identity-token
```

Working at https://cloud-tutorial-cloudrun-4p6t67ynaa-rj.a.run.app