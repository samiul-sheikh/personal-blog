# Personal Blog
## Blog site react application

### `Technology Used`
- JavaScript (ES6)
- React JS
- Bootstrap
- Axios
- React Hook Form
---
## :link: [See live project here](https://personal-blog-care-box.netlify.app/)

---
### `Project Features`
- Using react hook form, send data to the post API, and after sending, you will get a success or failure message.
- Using this GET API, fetch all data from the server and show it in a table.
- Finally, implement the Update/PUT API for each row.
- Live site not working due to Cors policy but in localhost it works properly.

### `API`
POST: https://care-box-backend.herokuapp.com/api/v1/applicant_test/
GET: https://care-box-backend.herokuapp.com/api/v1/applicant_test/
PUT: https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/{id}/

Note: For PUT API, you need to add a header. The header is provided below.

headers:
        {
          "Custom-User-Agent": "gsdf#g3243F466$",
        }
