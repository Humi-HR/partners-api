# TimeOff Show

Get approved time off requests of a specific employee.

**URL** : `/v1/timeoff/:employeeId`

**Method** : `GET`

**Auth required** : YES, include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

## Requests
Requests must follow the [JSON:API](https://jsonapi.org/) spec.

The `dateRange[start]` and `dateRange[end]` parameters are required.

The results will only include time off requests where the start date(`start_at`), end date(`end_at`), or dates between
the start and end dates of the time off request overlap with the provided date range(`dateRange[start]` and `dateRange[end]`).

### Date Range Examples

Given a `dateRange[start]` of **2022-01-01** and a `dateRange[end]` of **2022-01-31** and time off requests with the following `start_at` and `end_at` values:

| start_at   | end_at     | Included | Reason                                                                                     |
|------------|------------|----------|--------------------------------------------------------------------------------------------|
| 2022-01-02 | 2022-01-04 | Yes      | Both the start and end dates of the time off request are within the given date range.      |
| 2022-01-30 | 2022-02-03 | Yes      | The start date of the time off request is within the given date range.                     |
| 2021-12-24 | 2022-01-02 | Yes      | The end date of the time off request is within the given date range.                       |
| 2021-12-01 | 2022-03-01 | Yes      | The dates between the start and end of the time off request overlap with given date range. |
| 2021-12-01 | 2021-12-31 | No       | Both the start and end dates are before the given date range and do not overlap.           |
| 2022-02-01 | 2021-02-10 | No       | Both the start and end dates are after the given date range and do not overlap.            |


### Request Query Parameters

| Name         | Type         | Data Type         | Default | Description                                                         |
|--------------|--------------|-------------------|---------|---------------------------------------------------------------------|
| date[start]  | **required** | date (YYYY-MM-DD) | N/A     |                                                                     |
| date[end]    | **required** | date (YYYY-MM-DD) | N/A     |                                                                     |
| page[size]   | optional     | int               | 25      | Requested Page size. There is a **maximum of 25** results per page. |
| page[number] | optional     | int               | 1       | Requested Page number.                                              |


### Example Request

#### curl
```
curl -G \
     -H "Authorization: Bearer valid-token-here" \
     --data-urlencode "dateRange[start]=2022-01-01" \
     --data-urlencode "dateRange[end]=2022-02-28" \
     https://partners.humi.ca/v1/timeoff/valid-employee-id-here
```


## Responses
Responses follow the [JSON:API](https://jsonapi.org/) spec.

Responses are ordered by the `updated_at` field, descending. (ie. most recently updated first)

#### Data
The `data` attribute is an `array` of `timeOffRequest` objects.

#### TimeOffRequest
A `timeOffRequest` has an `id` which is a unique identifier.

A `timeOffRequest` has `attributes` which contain the information about the time off request.

**Only approved time off requests will appear in the results.**

#### TimeOffRequest Attributes
| Attribute          | Data Type      | Description                                                          |
|--------------------|----------------|----------------------------------------------------------------------|
| id                 | uuid (v4)      | a unique identifier for this time off request                        |
| employee_id        | uuid (v4)      | a unique identifier for the employee the time off request belongs to |
| type               | string         | the type of time off request (ie Personal Day, Sick Day etc.)        |
| start_at           | date           | the date the time off request starts                                 |
| end_at             | date           | the date the time off request ends                                   |
| status             | string         | current status of the time off request (pending, approved or denied) |
| description        | string or null | description about the time off request (if provided)                 |
| total_amount_days  | float          | total amount of time off requested in days                           |
| total_amount_hours | float          | total amount of time off requested in hours                          |
| created_at         | datetime       | creation of the time off request                                     |
| updated_at         | datetime       | last time the time off request was updated                           |

#### Meta
The `meta` attribute contains information about the response itself, including pagination data. Responses are **paginated**,
so you may need to make several requests to get the full list. Pages have a maximum value of 25.

### Success Response

**Code** : `200 OK`

Given a request to `partners.humi.ca/v1/timeoff/:employeeId` with a [valid token](../../../README.md#humi-partners-api-token),
a valid `Employee ID`, and appropriate `dateRange[start]` and `dateRange[end]` query parameters we can expect a response
similar to the one below.

```json
{
  "data": [
    {
      "id": "630d09c7-b77c-40f3-8540-0860474c7173",
      "type": "timeOffRequest",
      "attributes": {
        "id": "630d09c7-b77c-40f3-8540-0860474c7173",
        "employee_id": "2dad89f2-62ee-4d7c-8f8d-706ce5ed30d1",
        "type": "Personal Day",
        "start_at": "2022-02-16",
        "end_at": "2022-02-28",
        "status": "approved",
        "description": null,
        "total_amount_days": 8,
        "total_amount_hours": 64,
        "created_at": "2022-01-17T14:19:00.000000Z",
        "updated_at": "2022-01-26T14:54:03.000000Z"
      }
    },
    {
      "id": "95c26144-8e41-49c6-bd55-16773950f7f6",
      "type": "timeOffRequest",
      "attributes": {
        "id": "95c26144-8e41-49c6-bd55-16773950f7f6",
        "employee_id": "2dad89f2-62ee-4d7c-8f8d-706ce5ed30d1",
        "type": "Sick Day",
        "start_at": "2022-01-17",
        "end_at": "2022-01-19",
        "status": "approved",
        "description": null,
        "total_amount_days": 3,
        "total_amount_hours": 24,
        "created_at": "2022-01-13T14:20:24.000000Z",
        "updated_at": "2022-01-17T19:12:02.000000Z"
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
      "per_page": 25,
      "page": 1,
      "total": 2
    }
  }
}
```
