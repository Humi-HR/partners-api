# Employee Index

Get the details of all employees of a company.

**URL** : `/v1/employees`

**Method** : `GET`

**Auth required** : YES, include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

## Requests
Requests must follow the [JSON:API](https://jsonapi.org/) spec.

### Request Query Parameters

| Name         | Type     | Data Type | Default | Description                                                         |
|--------------|----------|-----------|---------|---------------------------------------------------------------------|
| page[size]   | optional | int       | 25      | Requested Page size. There is a **maximum of 25** results per page. |
| page[number] | optional | int       | 1       | Requested Page number.                                              |
| include      | optional | String    |         | Additional relationships to include

### Example Request

#### curl
```
curl -G \
     -H "Authorization: Bearer valid-token-here" \
     --data-urlencode "page[size]=5" \
     --data-urlencode "page[number]=2" \
     https://partners.humi.ca/v1/employees
```


## Responses
Responses follow the [JSON:API](https://jsonapi.org/) spec.

Responses are ordered by the `created_at` field, ascending. (ie. 1, 2, 3...)

#### Data
The `data` attribute is an `array` of `Employee` objects.

#### Employee
An `Employee` has an `id` which is a unique identifier.

An `Employee` has `attributes` which contain the information about the employee.

An `Employee` has `relationships` for records that are related to it. Each relationship is an array of data which has
an `id` and `type`.

Humi allows users to delete employees. **Deleted employees will not appear in the results.**

#### Employee Attributes
| Attribute        | Data Type      | Description                                                                                      |
|------------------|----------------|--------------------------------------------------------------------------------------------------|
| id               | uuid (v4)      | a unique identifier for this employee                                                            |
| first_name       | string         | name the employee goes by                                                                        |
| last_name        | string         | name the employee goes by                                                                        |
| legal_first_name | string         | name on government issued identification                                                         |
| legal_last_name  | string         | name on government issued identification                                                         |
| email            | string         | primary email used in Humi                                                                       |
| work_phone       | string or null | work phone                                                                                       |
| mobile_phone     | string or null | mobile phone                                                                                     |
| department       | string or null | name of department (not required)                                                                |
| position         | string or null | name of position (not required)                                                                  |
| office           | string or null | address of office (not required)                                                                 |
| employment_type  | string         | one of: full-time, seasonal, part-time, contractor, intern, consultant, other, volunteer, casual |
| start_date       | date           | start of employment                                                                              |
| end_date         | date or null   | end of employment                                                                                |
| created_at       | datetime       | creation of employee entity                                                                      |
| updated_at       | datetime       | last time employee or employee's position, department, office was updated                        |

#### Meta
The `meta` attribute contains information about the response itself, including pagination data. Responses are **paginated**,
so you may need to make several requests to get the full list. Pages have a maximum value of 25.

### Included

The `included` attribute contains records that are related to the `Employee`. They are available if the request has the `include` query parameter set.
The value for this query parameter is a comma-separated list, which may contain any combination of the following:

- `salaries`: To include a list salary details for each employee.

#### Salaries

If salaries are included, each salary record will be on the `relationships` section for an `Employee` record. Information for about the
`Salary` record can be found by filtering through the `included` section of the response.
#### Salary Attributes

| Attribute    | Data Type        | Description                                              |
|--------------|------------------|----------------------------------------------------------|
| id           | uuid (v4)        | a unique identifier for this employee                    |
| name         | string           | human-readable name used to identify this salary         |
| rate         | int              | rate, in dollars, of this salary item                    |
| frequency    | string           | `hour` for hourly salaries, `year` for annual salaries   |
| is_primary   | boolean          | `true` if the rate is the employees primary compensation |
| effective_at | datetime         | the date the salary comes into effect                    |
| ends_at      | datetime or null | end date of the salary                                   |
| created_at   | datetime         | creation of the salary entity                            |
| updated_at   | datetime         | last time the salary was updated                         |

### Success Response

**Code** : `200 OK`

Given a request to `partners.humi.ca/v1/employees` with a [valid token](../../README.md#humi-partners-api-token), with pagination query params `?page[size]=5&page[number]=2`, we can expect a response similar to the one below.

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

**Including employee salaries**

Given a request to `partners.humi.ca/v1/employees` with a [valid token](../../README.md#humi-partners-api-token), with pagination query params `?page[size]=2&page[number]=1&include=salaries`, we can expect a response similar to the one below.

```json
{
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
      },
      "relationships": {
        "salaries": {
        "data": [
            {
              "id": "ffe227b1-e2dd-48f5-9946-e65b645b91ef",
              "type": "salaries"
            }
          ]
        }
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
    },
    "relationships": {
        "salaries": {
          "data": [
            {
              "id": "6959edc1-e383-4310-8542-509388354dbf",
              "type": "salaries"
            }
          ]
        }
      }
    }
  ],
  "jsonapi": {
    "version": "1.0",
    "meta": "Humi HR API"
  },
  "meta": {
    "copyright": "© 2022 Humi Soft",
    "pagination": {
      "per_page": 2,
      "page": 1,
      "total": 31
    }
  },
  "included": [
    {
      "id": "6959edc1-e383-4310-8542-509388354dbf",
      "type": "salaries",
      "attributes": {
        "id": "6959edc1-e383-4310-8542-509388354dbf",
        "name": "Regular Pay",
        "rate": "69220",
        "frequency": "year",
        "effective_at": {
          "date": "2022-05-02 00:00:00.000000",
          "timezone": "UTC"
        },
        "ends_at": null,
        "is_primary": true,
        "created_at": "2022-06-14T14:54:35.000000Z",
        "updated_at": "2022-06-14T14:55:46.000000Z"
      }
    },
    {
      "id": "ffe227b1-e2dd-**48f5**-9946-e65b645b91ef",
      "type": "salaries",
      "attributes": {
        "id": "ffe227b1-e2dd-48f5-9946-e65b645b91ef",
        "name": "Regular Pay",
        "rate": "12615",
        "frequency": "year",
        "effective_at": {
          "date": "2022-05-04 00:00:00.000000",
          "timezone": "UTC"
        },
        "ends_at": null,
        "is_primary": true,
        "created_at": "2022-06-14T14:54:35.000000Z",
        "updated_at": "2022-06-14T14:55:42.000000Z"
      }
    }
  ]
}
```

## Notes

* Responses are ordered by the `created_at` field, ascending. (ie. 1, 2, 3...)
