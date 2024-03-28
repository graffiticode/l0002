Graffiticode API Gateway
---

# Getting started

## [Authorization](docs/authorization.md)

## Steps include (Mac OSX)

* Clone and initialize the GC repo.
  * `$ git clone git@github.com:graffiticode/api.git`
  * `$ cd api`
  * `$ npm install`
* Make Graffiticode use this local API gateway.
  * Switch to the ./graffiticode terminal.
  * `$ export LOCAL_COMPILES=true`
* Test the API gateway
  * Switch back to the ./api terminal.
  * `$ export LOCAL_COMPILES=false`
  * `$ make test`

# Deploying

## Docker Compose
The graffiticode api application can be run with [Docker Compose](https://docs.docker.com/compose/).

```bash
docker network create developer_net
docker-compose up -d
```

## Use `deployer`
`deployer` is an application that installs, builds, and deploys graffiticode projects. The deployer uses a config/manifest to determine how to install, build, and deploy projects ([example](configs/deployer-config.json)).

__TODO__ _More description and documentation needed_

### Build `deployer`
```bash
npm run build
```

### Run `deployer`
```bash
npm run deployer
```
This uses a sample [configuration](configs/deployer-config.json) that deploy the [L0](https://github.com/graffiticode/l0), [L1](https://github.com/graffiticode/l1), and [api](https://github.com/graffiticode/api) projects to AWS Lambda functions.

## AWS Lambda
Steps to deploy `graffiticode/api` on AWS Lambda. To
get a first look at deploying an AWS Lambda function see this
[guide](https://docs.aws.amazon.com/lambda/latest/dg/with-userapp.html).

### Prerequisites
1. Install and configure the AWS cli [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

### Setup the Execution Role
1. Navigate to this [guide](https://docs.aws.amazon.com/lambda/latest/dg/with-userapp.html)
and follow the instructions to `Create the Execution Role`.
1. Navigate to the created [execution role](https://console.aws.amazon.com/iam/home#/roles/lambda-cli-role)
and copy the `Role ARN`
1. Paste Role ARN copied from the previous step in the `--role` cli parameter
under the `create` target in the `src/deploy/Makefile`
(ex. `--role arn:aws:iam::903691265300:role/lambda-cli-role`)

### Manage the Lambda function
1. To create the function, run `make -f src/deploy/Makefile create`. <br />
   _NOTE: only need to run this once_
1. To update the function, run `make -f src/deploy/Makefile update`. <br />
   _NOTE: do this whenever code is updated_

# Contributing

## Development

```bash
npm run dev
```

This is the npm script to clean, build, test, and run the application on file changes.

## License

[MIT](LICENSE.txt)
