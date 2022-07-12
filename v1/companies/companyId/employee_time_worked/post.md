# Employee Time Worked 

Create or update time worked data for an employee

**URL**: `/v1/payroll/employee_time_worked`

**Method**: `POST`

**Auth required**: YES, include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

## Requests

A `POST` is made to the endpoint for a single employee at a time. Any number of `time_worked` entries
may be included for the employee.

### Request body

| Name        | Type     | Data Type                      | Description                                             |
|-------------|----------|--------------------------------|---------------------------------------------------------|
| employee_id | required | uuid (v4)                      | The unique identifier for the employee                  |
| time_worked | required | array of `Time Worked` entries | An array that contains at least one `Time Worked` entry |

**Time Worked**

A `Time Worked` entry contains the following information

| Name           | Type     | Data Type                | Description                                                                 |
|----------------|----------|--------------------------|-----------------------------------------------------------------------------|
| id             | optional | uuid (v4)                | A unique identifier that identifies this `Time Worked` entry. **See below** |
| rate_id        | required | uuid (v4)                | The unique identifier of the **hourly rate** this entry is for.             |
| start_time     | required | datetime                 | The start time of this `Time Worked` entry. **Cannot be in the future**     |
| end_time       | required | datetime                 | The end time of this `Time Worked` entry. **Cannot be in the future**       |
| hours          | required | decimal formatted string | The number of regular hours for this `Time Worked` entry                    |
| overtime_hours | required | decimal formatted string | The number of overtime hours for this `Time Worked` entry                   |

When the `id` is not included in the request, the entry is recorded as a new record. The `id` will be set in the request and can be
read out from the response. If the `id` is set and exists for `employee_id` then the record will have its contents updated.

### Example Request

#### curl
```
curl --location --request POST 'https://partners.humi.ca/v1/payroll/employee_time_worked
     -H "Authorization: Bearer valid-token-here"
     --data-raw '{
      "employee_id": "ecf35d71-4b3b-4cb1-9349-5817f48e4769",
      "time_worked": [
        {
          "rate_id": "d0060b91-8cae-4303-a11e-b1da9b156e1d",
          "start_time": "2022-02-14 09:00:00 -04:00",
          "end_time": "2022-02-14 17:00:00 -04:00",
          "hours": "8.0",
          "overtime_hours": "0.0"
        }
      ]
     }'
```

## Responses

Responses are returned to the caller with the following fields added to each `Time Worked` entry:

| Attribute | Data Type                | Description                                                  |
|-----------|--------------------------|--------------------------------------------------------------|
| id        | uuid (v4)                | the unique identifier for the `Time Worked` item             |
| amount    | decimal formatted string | the calculated cost for the `Time Worked` item **see below** |

When `Time Worked` entries are recorded, the `amount` is calculated out-of-band and is eventually consistent.

### Success Response

**Code**: `202 Accepted`

Given the example request above, we can expect the following response:

```json
{
  "employee_id": "ecf35d71-4b3b-4cb1-9349-5817f48e4769",
  "time_worked": [
    {
      "id": "3aca93cf-eeec-4de6-83c8-551e6d27bf9c",
      "rate_id": "d0060b91-8cae-4303-a11e-b1da9b156e1d",
      "start_time": "2022-02-14 09:00:00 -04:00",
      "end_time": "2022-02-14 17:00:00 -04:00",
      "hours": "8.0",
      "overtime_hours": "0.0",
      "amount": "0.0"
    }
  ]
}
```


