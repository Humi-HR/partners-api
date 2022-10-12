# Humi Partners API  
> An API for accessing Humi employee data in third-party applications 
<hr>

**Our Open API is in a closed beta phase.** We are more than happy to provide a token to explore current functionality. However, as this is still actively in development -- there may be unexpected changes, downtime, or other complications. 

**Use at your own risk.** If you have additional questions, desired use cases, or comments, our product team is interested to speak to you. Please contact support@humi.ca with any questions.

## Table of Contents
* [Introduction](#introduction)
* [Getting Started](#getting-started)
* [Responses](#responses)
* [Requests](#requests)
* [Examples](#examples)
* [Domain](#domain)
* [Endpoints](#endpoints)
* [Webhooks](#webhooks)
* [Humi Partners API Token](#humi-partners-api-token)

## <a name="introduction"></a>Introduction
The Humi Partners API allows access to Humi employee data in a third-party application.

The API follows the [JSON:API](https://jsonapi.org/) spec.

## <a name="getting-started"></a>Getting Started
Before using the API, you must obtain a [Humi Partners API Token](#humi-partners-api-token).

To access data, make a `GET` request to one of the [available endpoints](#available-endpoints) and include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

The results will be returned following the [JSON:API](https://jsonapi.org/) spec.

## <a name="requests"></a>Requests

Requests must follow the [JSON:API](https://jsonapi.org/) spec.

Request must be to one of the [available endpoints](#available-endpoints).


## <a name="responses"></a>Responses

Responses follow the [JSON:API](https://jsonapi.org/) spec.


## <a name="domain"></a>Domain

The Partners API Domain is `partners.humi.ca`. Only `https` is supported.

## <a name="endpoints"></a>Endpoints

### Employee

Endpoints for retrieving Employee information.

* [Employee Index](v1/employees/get.md) : `GET /v1/employees`
* [Employee Show](v1/employees/employeeId/get.md) : `GET /v1/employees/:employeeId`

### Time Off

Endpoints for retrieving Time Off information.

* [Time Off Index](v1/timeoff/get.md) : `GET /v1/timeoff`
* [Time Off Show](v1/timeoff/employeeId/get.md) : `GET /v1/timeoff/:employeeId`

## <a name="webhooks"></a>Webhooks

### Employee

Employee events that trigger webhooks.

* [EmployeeCreated](v1/webhooks/employees/created.md) : `EmployeeCreated Event`
* [EmployeeUpdated](v1/webhooks/employees/updated.md) : `EmployeeUpdated Event`
* [EmployeeTerminated](v1/webhooks/employees/terminated.md) : `EmployeeTerminated Event`
* [EmployeeDeleted](v1/webhooks/employees/deleted.md) : `EmployeeDeleted Event`

### Company

Company events that trigger webhooks.

* [CompanyCreated](v1/webhooks/companies/created.md) : `CompanyCreated Event`
* [CompanyUpdated](v1/webhooks/companies/updated.md) : `CompanyUpdated Event`

## <a name="examples"></a>Examples
### curl
```
curl -H "Authorization: Bearer valid-token-here" https://partners.humi.ca/v1/employees?page%5Bsize%5D=5&page%5Bnumber%5D=2
```

### node

There is a sample node client in `sample-node-client.js`.

## <a name="humi-partners-api-token"></a>Humi Partners API Token
Humi Partners API Tokens are used to access Humi data. Each token allows you access to only one company in Humi. They do not expire, but can be revoked by Humi.

Humi Partners API Tokens should **never** be shared, published, or committed.

Humi Partners API Tokens are issued by Humi. To request one, please contact `support@humi.ca` and use the subject `Requesting Humi Partners API Token`.
