# Employee Time Worked 

Create or update time worked data for an employee

**URL**: `/v1/payroll/employee_time_worked`

**Method**: `POST`

**Auth required**: YES, include your token in the `Authorization` header. Ex: `Authorization: Bearer your-token-here`

## Requests

A `POST` is made to the endpoint for a single employee at a time. Any number of `time_worked` entries
may be included for the employee.

### Request body

| Name                        | Type                     | Data Type                                     | Description                                                                     |
| --------------------------- | ------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------- |
| employee_id                 | required                 | uuid (v4)                                     | The unique identifier for the employee                                          |
| time_worked                 | required                 | array of `Time Worked` entries                | An array that contains at least one `Time Worked` entry                         |
| reset                       | optional | boolean (default: true)                                       | When set to true will destroy all previous time worked entries on open payrolls |
| inferred_additional_incomes | optional                 | array of `Inferred Additional Income` entries | An array that contains zero or more `Inferred Additional Income` entries        |

**Time Worked**

A `Time Worked` entry contains the following information

| Name               | Type     | Data Type                | Description                                                                 |
|--------------------|----------|--------------------------|-----------------------------------------------------------------------------|
| id                 | optional | uuid (v4)                | A unique identifier that identifies this `Time Worked` entry. **See below** |
| rate_id            | required | uuid (v4)                | The unique identifier of the **hourly rate** this entry is for.             |
| start_time         | required | datetime                 | The start time of this `Time Worked` entry. **Cannot be in the future**     |
| end_time           | required | datetime                 | The end time of this `Time Worked` entry. **Cannot be in the future**       |
| hours              | required | decimal formatted string | The number of regular hours for this `Time Worked` entry                    |
| overtime_hours     | required | decimal formatted string | The number of overtime hours for this `Time Worked` entry                   |
| additional_incomes | optional | AdditionalIncome         | An array of `AdditionalIncome` items for this `Time Worked` entry           |

When the `id` is not included in the request, the entry is recorded as a new record. The `id` will be set in the request and can be
read out from the response. If the `id` is set and exists for `employee_id` then the record will have its contents updated.

**Additional Income**

`Additional Income` can be provided where an employee might have received additional wages during a shift. These wages can
be hourly based (such as overtime premiums) or fixed amounts (such as tips or bonuses). The collection of `Additional Incomes`
can contain hourly and fixed amounts though all items must be valid in order for the request to be accepted.

If an entry for a time-based `CompanyAdditionalIncome` is submitted where `hours` are absent or is not greater than zero,
the request will be rejected. The `amount` will be validated against the `rate` x `hours` x `additional income multiplier`.
For example: An employee with an hourly rate of $25.00 per hour who did 2 hours of double overtime should the following in
their `amount` field: `25.00 x 2 x 2 => 100.00`

If an entry for a fixed-amount `CompanyAdditionalIncome` is submitted where `amount` is absent or is not greater than zero,
the request will be rejected. The `hours` attribute must be `0`

| Name   | Type      | Data Type                | Description                                                                                                        |
| ------ | --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| id     | required  | uuid (v4)                | UUID of the [CompanyAdditionalIncome](../../payroll/additional_incomes/get.md) this applies to                     |
| hours  | required* | decimal formatted string | **Required on time-based additional incomes**. The number of hours the additional income applies for               |
| amount | required* | money formatted string   | **Required on fixed-amount additional incomes**. The number of additional dollars earned during the period of work |


**Inferred Additional Income**

An `Inferred Additional Income` is provided for statutory holidays in which the hourly employee was provided a set wage. Inferred Additional Incomes
will be applied to the employees primary rate that was active on the date of the statutory holiday.

Hours do not need to be provided and when they aren't they will be estimated based on the amount that was provided. Using the amount and the active primary
rate for the date, the hours will be inferred.

Example: If an employee made 300.00 of stat pay on the 25th of December, 2021 and their active primary rate at that time was $40.00 per hour. The number of hours
that would be calculated would be 7.5.

| Name       | Type     | Data Type                | Description                                                                                                                |
| ---------- | -------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| id         | required | uuid  (v4)               | UUID of the [CompanyAdditionalIncome](../../payroll/additional_incomes/get.md) (usually `holiday_pay`)                     |
| start_time | required | datetime                 | The start of the day for the statutory holiday (i.e. `2021-12-25 00:00:00 -05:00`                                          |
| end_time   | required | datetime                 | The end of the day for the statutory holiday (i.e. `2021-12-25 23:59:59 -05:00`)                                           |
| amount     | required | money formatted string   | The amount of money to be paid to the employee employee as compensation for the statutory holiday                          |
| hours      | optional | decimal formatted string | The number of hours to count for this inferred income. If this is absent it will be estimated based on the provided amount |

### Example Request

Given two [CompanyAdditionalIncomes](../../payroll/additional_incomes/get.md) that need to be applied to
a shift with the follow attributes:

- A **Double Overtime** additional income exists with ID `5a6edb6b-1df1-4b19-8037-b2dece02e444`. An additional income
  entry for this item is only valid if it contains the `hours` attribute.
- A **Controlled Tips** additional income exists with ID `a0a50ab1-963b-442d-8268-aa32400def89`. An additional income
  entry for this item is only valid if it contains the `amount` attribute.
- A **Holiday Pay** additional income exists with ID `8414f7ea-db9f-43e7-8cca-6c54eb738587`.


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
          "overtime_hours": "0.0",
          "additional_incomes: [
            {
              "id": "5a6edb6b-1df1-4b19-8037-b2dece02e444",
              "hours": "4.5",
              "amount": "390.00"
            },
            {
              "id": "a0a50ab1-963b-442d-8268-aa32400def89",
              "hours": "0.0",
              "amount": "45.00"
            }
          ]
        }
      ],
      "inferred_additional_incomes": [
        {
          "id": "8414f7ea-db9f-43e7-8cca-6c54eb738587",
          "start_time": "2022-02-02 00:00:00 -04:00",
          "end_time": "2022-02-02 23:59:59 -04:00",
          "amount": "150.00"
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
    "employee_id": "58397f6f-fe63-44a9-9a5c-7f87fa2740c4",
    "time_worked": [
        {
            "id": "16aca866-db41-4d00-9cf2-18c3294d30dd",
            "start_time": "2022-11-10T03:00:00.000-05:00",
            "end_time": "2022-11-10T15:00:00.000-05:00",
            "line_items": [
                {
                    "rate_id": "d0060b91-8cae-4303-a11e-b1da9b156e1d",
                    "name": "Regular Pay",
                    "hours": "12.0",
                    "overtime_hours": 0,
                    "amount": "0.0"
                },
                {
                    "rate_id": "d0060b91-8cae-4303-a11e-b1da9b156e1d",
                    "name": "overtime",
                    "hours": 0,
                    "overtime_hours": "0.0",
                    "amount": "0.0"
                },
                {
                    "rate_id": "d0060b91-8cae-4303-a11e-b1da9b156e1d",
                    "name": "controlled_tips",
                    "hours": "0.0",
                    "overtime_hours": 0,
                    "amount": "45.0"
                },
                {
                    "rate_id": "d0060b91-8cae-4303-a11e-b1da9b156e1d",
                    "name": "double_overtime",
                    "hours": "4.5",
                    "overtime_hours": 0,
                    "amount": "390.0"
                }
            ]
        },
        {
            "id": "8753b74b-840d-40d4-b0fa-2c20c4668ad3",
            "start_time": "2022-11-10T23:00:00.000-05:00",
            "end_time": "2022-11-11T22:59:59.000-05:00",
            "line_items": [
                {
                    "rate_id": "d0060b91-8cae-4303-a11e-b1da9b156e1d",
                    "name": "holiday_pay",
                    "hours": "1.92",
                    "overtime_hours": 0,
                    "amount": "0.0"
                }
            ]
        }
    ]
}
```


