# Humi Partners API  
> An API for accessing Humi employee data in third-party applications 
<hr>

## Table of Contents
* [Introduction](#introduction)
* [Getting Started](#getting-started)
* [Responses](#responses)
* [Requests](#requests)
* [Examples](#examples)
* [Domain](#domain)
* [Available Endpoints](#available-endpoints)
* [Humi Partners API Token](#humi-partners-api-token)

## <a name="introduction"></a>Introduction
The Humi Partners API allows access to Humi employee data in a third-party application.

The API follows the [JSON:API](https://jsonapi.org/) spec.

## <a name="getting-started"></a>Getting Started
Before using the API, you must obtain a [Humi Partners API Token](#humi-partners-api-token).

To access data, make a `GET` request to `https://partners.humi.ca/v1/employees` and include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

The results will be returned following the [JSON:API](https://jsonapi.org/) spec.

## <a name="requests"></a>Requests

Requests must follow the [JSON:API](https://jsonapi.org/) spec.

Request must be to one of the [available endpoints](#available-endpoints).

### Request Query Parameters

Requests accept two query parameters: **page size** and **page number**. For example, these query parameters will return the 2nd page of 5: `?page[size]=5&page[number]=2`.

Page size defaults to 25. There is a **maximum of 25** results per page. If there are more than 25 employees in a company, the client (you) must handle iterating through the pages.

Page number defaults to 1.

## <a name="responses"></a>Responses

Responses follow the [JSON:API](https://jsonapi.org/) spec.

Responses are ordered by the `created_at` field, ascending. (ie. 1, 2, 3...)

### Data
The `data` attribute is an `array` of `Employee` objects.

#### Employee
An `Employee` has an `id` which is a unique identifier.

An `Employee` has `attributes` which contain the information about the employee.

Humi allows users to delete employees. **Deleted employees will not appear in the results.**

##### Employee Attributes
| Attribute | Type |  Description |
| ----------- | ----------- | ---|
| id | uuid (v4) | a unique identifier for this employee |
| first_name | string | name the employee goes by |
| last_name | string | name the employee goes by |
| legal_first_name | string | name on government issued identification  |
| legal_last_name | string | name on government issued identification |
| email | string | primary email used in Humi |
| work_phone | string \| null | work phone |
| mobile_phone | string \| null | mobile phone |
| department | string \| null | name of department (not required) |
| position | string \| null | name of position (not required) |
| office | string \| null | address of office (not required) |
| employment_type | string | one of: full-time, seasonal, part-time, contractor, intern, consultant, other, volunteer, casual |
| start_date | date | start of employment |
| end_date | date \| null | end of employment |
| created_at | datetime | creation of employee entity |
| updated_at | datetime | last time employee or employee's position, department, office was updated |

### Meta
The `meta` attribute contains information about the response itself, including pagination data. Responses are **paginated**, so you will need to make several requests to get the full list of employees. Pages have a maximum value of 25. 

### Sample response

Given a request to `partners.humi.ca/v1/employees` with a [valid token](#humi-partners-api-token), with pagination query params `?page[size]=5&page[number]=2`, we can expect a respone similar to the one below.

```json
{
  "data": [
    {
      "id": "ecf35d71-4b3b-4cb1-9349-5817f48e4769",
      "type": "employees",
      "attributes": {
        "id": "ecf35d71-4b3b-4cb1-9349-5817f48e4769",
        "first_name": "Piers",
        "last_name": "Walsh",
        "legal_first_name": "Piers",
        "legal_last_name": "Walsh",
        "email": "piers.walsh@jimsfinegoods.ca",
        "work_phone": null,
        "mobile_phone": "613-555-0196",
        "department": "Sales",
        "position": "Sales Manager",
        "employment_type": "full-time",
        "office": "123 Real Street, Toronto ON, M5P 1L9, Canada",
        "start_date": "2018-04-18",
        "end_date": null,
        "created_at": "2021-09-27T14:00:41+00:00",
        "updated_at": "2021-09-27T14:00:43+00:00"
      }
    },
    {
      "id": "4ae4c082-7a54-486b-8517-37518d60f90d",
      "type": "employees",
      "attributes": {
        "id": "4ae4c082-7a54-486b-8517-37518d60f90d",
        "first_name": "Ruth",
        "last_name": "Walsh",
        "legal_first_name": "Ruth",
        "legal_last_name": "Walsh",
        "email": "ruth.walsh@jimsfinegoods.ca",
        "work_phone": null,
        "mobile_phone": "613-555-0241",
        "department": "Sales",
        "position": "Sales Associate",
        "employment_type": "full-time",
        "office": "123 Halli Street, Halifax NS, B3H 0A6, Canada",
        "start_date": "2020-12-21",
        "end_date": null,
        "created_at": "2021-09-27T14:00:41+00:00",
        "updated_at": "2021-09-27T14:00:43+00:00"
      }
    },
    {
      "id": "226d42d8-a6ef-4724-91a6-fd066027cda0",
      "type": "employees",
      "attributes": {
        "id": "226d42d8-a6ef-4724-91a6-fd066027cda0",
        "first_name": "Simon",
        "last_name": "Lyman",
        "legal_first_name": "Simon",
        "legal_last_name": "Lyman",
        "email": "simon.lyman@jimsfinegoods.ca",
        "work_phone": null,
        "mobile_phone": "613-555-0235",
        "department": "IT",
        "position": "Technician",
        "employment_type": "full-time",
        "office": "123 Real Street, Toronto ON, M5P 1L9, Canada",
        "start_date": "2021-09-21",
        "end_date": null,
        "created_at": "2021-09-27T14:00:41+00:00",
        "updated_at": "2021-09-27T14:00:43+00:00"
      }
    },
    {
      "id": "fef40c6b-7d48-46d1-8517-a1d8638cc935",
      "type": "employees",
      "attributes": {
        "id": "fef40c6b-7d48-46d1-8517-a1d8638cc935",
        "first_name": "Leonard",
        "last_name": "Terry",
        "legal_first_name": "Leonard",
        "legal_last_name": "Terry",
        "email": "leonard.terry@jimsfinegoods.ca",
        "work_phone": null,
        "mobile_phone": "613-555-0273",
        "department": "IT",
        "position": "Developer",
        "employment_type": "full-time",
        "office": "123 Real Street, Toronto ON, M5P 1L9, Canada",
        "start_date": "2021-01-13",
        "end_date": null,
        "created_at": "2021-09-27T14:00:40+00:00",
        "updated_at": "2021-09-27T14:00:43+00:00"
      }
    },
    {
      "id": "0f066049-0de0-4b0b-83d7-6ddcaaafc767",
      "type": "employees",
      "attributes": {
        "id": "0f066049-0de0-4b0b-83d7-6ddcaaafc767",
        "first_name": "Maria",
        "last_name": "Ince",
        "legal_first_name": "Maria",
        "legal_last_name": "Ince",
        "email": "maria.ince@jimsfinegoods.ca",
        "work_phone": null,
        "mobile_phone": "613-555-0224",
        "department": "IT",
        "position": "Developer",
        "employment_type": "full-time",
        "office": "123 Real Street, Toronto ON, M5P 1L9, Canada",
        "start_date": "2021-02-18",
        "end_date": null,
        "created_at": "2021-09-27T14:00:40+00:00",
        "updated_at": "2021-09-27T14:00:43+00:00"
      }
    }
  ],
  "jsonapi": {
    "version": "1.0",
    "meta": "Humi HR API"
  },
  "meta": {
    "copyright": "© 2021 Humi Soft",
    "pagination": {
      "per_page": 5,
      "page": 2,
      "total": 31
    }
  }
}
```

## <a name="domain"></a>Domain

The Partners API Domain is `partners.humi.ca`. Only `https` is supported.

## <a name="available-endpoints"></a>Available Endpoints
| Name | Location | Options | Description |
| --- | --- | ---| ---|
| Employee | /v1/employees | index \|  show  | Employees of a company |

## <a name="examples"></a>Examples
### curl
```
curl -H "Authorization: Bearer valid-token-here?page%5Bsize%5D=5&page%5Bnumber%5D=2" https://partners.humi.ca/v1/employees
```

### node

There is a sample node client in `sample-node-client.js`.

## <a name="humi-partners-api-token"></a>Humi Partners API Token
Humi Partners API Tokens are used to access Humi data. Each token allows you access to only one company in Humi. They do not expire, but can be revoked by Humi.

Humi Partners API Tokens should **never** be shared, published, or committed.

Humi Partners API Tokens are issued by Humi. To request one, please contact `support@humi.ca` and use the subject `Requesting Humi Partners API Token`.
