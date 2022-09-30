
        const box = document.getElementById("box");
        const square = document.getElementById("square");
        const rectangle = document.getElementById("rectangle");
        const circle = document.getElementById("circle");

        square.addEventListener("click", () => {
            box.style.width = "300px";
            box.style.height = "300px";
            box.style.borderRadius = "0%";
        });

        rectangle.addEventListener("click", () => {
            box.style.width = "500px";
            box.style.borderRadius = "0%";
        });

        circle.addEventListener("click", () => {
            box.style.borderRadius = "50%";
            box.style.width = "300px";
            box.style.height = "300px";
        });


        // Form Validation

        // Inputs
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const zipcode = document.getElementById("zipcode").value;
        const input = document.getElementsByClassName("input-field")
        const submit = document.getElementById("submit");

        // Error Messages
        const fnameError = document.getElementById("fnameError");
        const lnameError = document.getElementById("lnameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const zipcodeError = document.getElementById("zipcodeError");
        const submitError = document.getElementById("submitError");
        const error = document.getElementsByClassName("error");

        function validateFname(){
            if(fname.length == 0){
                // fnameError.innerHTML = "*This field is required";
                return false;
            }
            return true;
        }

        function validateLname(){
            if(lname.length == 0){
                // lnameError.innerHTML = "*This field is required";
                return false;
            }
            return true;
        }

        function validateEmail(){
            if(email.length == 0){
                // emailError.innerHTML = "*This field is required";
                return false;
            }
            return true;
        }

        function validatePhone(){
            if(phone.length == 0){
                // phoneError.innerHTML = "*This field is required";
                return false;
            }
            return true;
        }

        function validateZipcode(){
            if(zipcode.length == 0){
                // zipcodeError.innerHTML = "*This field is required";
                return false;
            }
            return true;
        }

        function validateForm(){

            if(!validateFname() || !validateLname() || !validateEmail() || !validatePhone() || !validateZipcode()){
                submitError.style.display = "block";
                submitError.innerHTML = "Please Fill All Fields To Submit";
                setTimeout(function(){
                    submitError.style.display = 'none'
                }, 3000);
                // alert("Please Fill All Fields to Continue");
                return false;
            }
        }

              



 