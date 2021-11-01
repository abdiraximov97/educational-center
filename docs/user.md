## User Route Requests

### 1.  User Sign In Endpoint

##### Request

`SERVER_URL/users/sign_in`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Deskription | Type | Required |
| ---- | ----------- | ---- | -------- |
| user_username | User's username (`min(5), max(32), unique`)| String | true|
| user_Password | User's password (`min(5), max(128)`)| String | true|

##### Response status codes

`201 - Token created seccessfully`
`400 - Username || Password is incorrect`
`500 - Internal Server Error`