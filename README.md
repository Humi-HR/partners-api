# Humi Partners API  
> An API for accessing Humi employee data in third-party applications 
<hr>

## Table of Contents
* [Introduction](#introduction)
* [Getting Started](#getting-started)
* [Responses](#responses)
* [Examples](#examples)
* [Humi Partners API Token](#humi-partners-api-token)

## <a name="introduction"></a>Introduction
The Humi Partners API allows access to Humi employee data in a third-party application.

The API follows the [JSON:API](https://jsonapi.org/) spec.

## <a name="getting-started"></a>Getting Started
Before using the API, you must obtain a [Humi Partners API Token](#humi-partners-api-token).

To access data, make a `GET` request to `https://partners.humi.ca/v1/employees` and include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

The results will be returned following the [JSON:API](https://jsonapi.org/) spec.

## <a name="responses"></a>Responses

Responses follow the [JSON:API](https://jsonapi.org/) spec.

### Data
The `data` attribute is an `array` of `Employee` objects.

#### Employee
An `Employee` has an `id` which is a unique identifier.

An `Employee` has `attributes` which contain the information about the employee.

##### Employee Attributes
| Attribute | Type |  Description |
| ----------- | ----------- | ---|
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

### Sample response (TODO replace with newer, cleaner version)
```json
{
  "data": [
    {
      "id": 32700,
      "type": "employees",
      "attributes": {
        "first_name": "John",
        "last_name": "Brown",
        "legal_first_name": "John",
        "legal_last_name": "Brown",
        "email": "reisha+john@humi.ca",
        "work_phone": null,
        "mobile_phone": "1-999-9999",
        "department": "HR",
        "position": "HR Manager",
        "employment_type": "part-time",
        "office": "325 front street west, Toronto ON, M5V 2Y1, Canada",
        "start_date": "2020-04-01",
        "end_date": "2020-04-01",
        "created_at": "2020-04-06T20:16:54+00:00",
        "updated_at": "2020-07-30T17:18:59+00:00"
      }
    },
    {
      "id": 32699,
      "type": "employees",
      "attributes": {
        "first_name": "Jane",
        "last_name": "Doe",
        "legal_first_name": "Jane",
        "legal_last_name": "Doe",
        "email": "reisha+jane@humi.ca",
        "work_phone": null,
        "mobile_phone": "1-888-8888",
        "department": "HR",
        "position": "HR Manager",
        "employment_type": "full-time",
        "office": "325 front street west, Toronto ON, M5V 2Y1, Canada",
        "start_date": "2020-03-30",
        "end_date": "2020-04-01",
        "created_at": "2020-04-06T20:10:26+00:00",
        "updated_at": "2020-07-30T17:18:59+00:00"
      }
    },
    {
      "id": 32697,
      "type": "employees",
      "attributes": {
        "first_name": "Reisha",
        "last_name": "Smith",
        "legal_first_name": "Sarah",
        "legal_last_name": "Smith",
        "email": "reisha+sarah@humi.ca",
        "work_phone": null,
        "mobile_phone": "1-888-8888",
        "department": "HR",
        "position": "HR Manager",
        "employment_type": "full-time",
        "office": "325 front street west, Toronto ON, M5V 2Y1, Canada",
        "start_date": "2020-04-01",
        "end_date": null,
        "created_at": "2020-04-06T19:47:57+00:00",
        "updated_at": "2020-07-30T17:18:59+00:00"
      }
    },
    {
      "id": 32694,
      "type": "employees",
      "attributes": {
        "first_name": "Reisha",
        "last_name": "Testing",
        "legal_first_name": "Reisha",
        "legal_last_name": "Testing",
        "email": "reisha+guide1@humi.ca",
        "work_phone": null,
        "mobile_phone": null,
        "department": null,
        "position": null,
        "employment_type": "full-time",
        "office": null,
        "start_date": "2020-01-01",
        "end_date": null,
        "created_at": "2020-04-06T19:11:39+00:00",
        "updated_at": "2021-08-16T19:29:41+00:00"
      }
    }
  ],
  "jsonapi": {
    "version": "1.0",
    "meta": "Humi HR API"
  },
  "meta": {
    "copyright": "© 2021 Humi Soft",
    "build": {},
    "buildDate": "2018-04-13T13:36:35+00:00",
    "instanceId": "i-0e3ea29af29ccfbb6",
    "pagination": {
      "per_page": 25,
      "page": 1,
      "total": 4
    }
  }
}
```

## <a name="examples"></a>Examples
### curl

## <a name="humi-partners-api-token"></a>Humi Partners API Token
Humi Partners API Tokens are used to access Humi data. Each token allows you access to only one company in Humi. They do not expire, but can be revoked by Humi.

Humi Partners API Tokens should **never** be shared, published, or committed.

Humi Partners API Tokens are issued by Humi. To request one, please contact _________.
