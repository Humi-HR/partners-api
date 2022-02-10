# TimeOff Show

Get approved time off requests of a specific employee.

**URL** : `/v1/timeoff/:employeeId`

**Method** : `GET`

**Auth required** : YES, include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

## Requests
Requests must follow the [JSON:API](https://jsonapi.org/) spec.

### Request Query Parameters

| Name         | Type     | Data Type         | Default | Description                                                         |
|--------------|----------|-------------------|---------|---------------------------------------------------------------------|
| date[start]  | required | date (YYYY-MM-DD) | N/A     |                                                                     |
| date[end]    | required | date (YYYY-MM-DD) | N/A     |                                                                     |
| page[size]   | optional | int               | 25      | Requested Page size. There is a **maximum of 25** results per page. |
| page[number] | optional | int               | 1       | Requested Page number.                                              |


### Example Request

#### curl
```
curl -H "Authorization: Bearer valid-token-here" https://partners.humi.ca/v1/timeoff/valid-employee-id-here
```


## Responses
Responses follow the [JSON:API](https://jsonapi.org/) spec.


#### Data
The `data` attribute is an `array` of `Employee` objects.

#### Employee
An `Employee` has an `id` which is a unique identifier.

An `Employee` has `attributes` which contain the information about the employee.

Humi allows users to delete employees. **Deleted employees will not appear in the results.**

#### Employee Attributes
| Attribute        | Data Type      | Description                                   |
|------------------|----------------|-----------------------------------------------|
| id               | uuid (v4)      | a unique identifier for this time off request |


#### Meta
The `meta` attribute contains information about the response itself, including pagination data. Responses are **paginated**,
so you may need to make several requests to get the full list. Pages have a maximum value of 25.

### Success Response

**Code** : `200 OK`

Given a request to `partners.humi.ca/v1/employees/:employeeId` with a [valid token](../../README.md#humi-partners-api-token), and a valid `Employee ID`, we can expect a response similar to the one below.

```json
{
  "data": {
    "id": "e9f326df-579b-48f7-b0ee-c917d928dd34",
    "type": "employees",
    "attributes": {
      "id": "e9f326df-579b-48f7-b0ee-c917d928dd34",
      "first_name": "Gandalf",
      "last_name": "the White",
      "legal_first_name": "Gandalf",
      "legal_last_name": "the White",
      "email": "manager@humi.ca",
      "work_phone": "(517) 738-5085",
      "mobile_phone": "651-477-8671",
      "department": "Legal",
      "position": "Account Executive",
      "employment_type": "consultant",
      "office": "643 Aliyah Way, Sussex NB, E4E 2Y7, Canada",
      "reports_to_id": "ab5aaa9a-811b-4881-a90d-07056c91fea4",
      "start_date": "2020-04-13",
      "end_date": null,
      "created_at": "2021-11-29T18:29:39.000000Z",
      "updated_at": "2022-01-13T16:54:20.000000Z"
    }
  },
  "jsonapi": {
    "version": "1.0",
    "meta": "Humi HR API"
  },
  "meta": {
    "copyright": "© 2022 Humi Soft"
  }
}
```
