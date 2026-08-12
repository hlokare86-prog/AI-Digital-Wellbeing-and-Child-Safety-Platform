# Testing Documentation

## AI Digital Wellbeing and Child Safety Platform

### Tester
Khushboo Thakur

---

## Login Test Cases

### Test case: Login with valid credentials
**Input:** Valid username/email and password  
**Expected output:** Dashboard opens successfully  
**Status:** PASS

### Test case: Login with invalid password
**Input:** Valid username/email and incorrect password  
**Expected output:** Error message is displayed  
**Status:** PASS

### Test case: Login with invalid username/email
**Input:** Invalid username/email and valid password  
**Expected output:** Error message is displayed  
**Status:** PASS

### Test case: Login with empty fields
**Input:** Username/email and password fields are empty  
**Expected output:** Validation message is displayed  
**Status:** PASS

---

## Logout Test Cases

### Test case: Logout
**Input:** User clicks the Logout button  
**Expected output:** User is logged out and redirected to the Login page  
**Status:** PASS

### Test case: Access dashboard after logout
**Input:** User tries to access the dashboard after logout  
**Expected output:** User is redirected to the Login page  
**Status:** PASS

---

## Backend API Test Cases

### Test case: Start backend server
**Input:** Start FastAPI server  
**Expected output:** Server starts successfully  
**Status:** PASS

### Test case: Open Swagger UI
**Input:** Open `http://127.0.0.1:8000/docs`  
**Expected output:** FastAPI Swagger UI opens successfully  
**Status:** PASS

### Test case: API with valid input
**Input:** Valid API request data  
**Expected output:** Successful response is returned  
**Status:** PASS

### Test case: API with invalid input
**Input:** Invalid or missing required data  
**Expected output:** Appropriate error message is returned  
**Status:** PASS

---

## Machine Learning Test Cases

### Test case: ML prediction with valid input
**Input:** Valid website/DNS sample  
**Expected output:** Prediction is generated successfully  
**Status:** PASS

### Test case: ML prediction with invalid input
**Input:** Invalid or incomplete input  
**Expected output:** Appropriate error/validation response is returned  
**Status:** PASS

### Test case: ML decision
**Input:** Valid website/DNS sample  
**Expected output:** Correct decision such as BLOCK or ALLOW is returned  
**Status:** PASS

---

## Database Test Cases

### Test case: Database connection
**Input:** Valid database configuration  
**Expected output:** Database connection is established successfully  
**Status:** PASS

### Test case: Store user data
**Input:** Valid user information  
**Expected output:** User data is stored successfully  
**Status:** PASS

### Test case: Retrieve user data
**Input:** Existing user ID  
**Expected output:** Correct user data is returned  
**Status:** PASS

---

## Test Result

Testing covers login, logout, backend APIs, machine learning,
and database functionality.
