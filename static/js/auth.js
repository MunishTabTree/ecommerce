// Register User
$("#registerButton").click(function () {
    let emailAddress = $('#emailAddress').val();
    let mobileNumber = $('#mobileNumber').val();
    let password = $('#password').val();
    if (emailAddress === '' || mobileNumber === '' || password === '') {
        alert('Please provide all the fields');
    } else {
        $.post('/api/register',
            {
                email: emailAddress,
                mobile: mobileNumber,
                password: password
            },
            function (data, status) {
                alert(data.message)
            });
    }
});
//Login User
$('#loginButton').click(function () {
    let loginMobile = $('#loginMobileNumber').val();
    let loginPassword = $('#loginPassword').val();
    if (loginMobile === '' || loginPassword === '') {
        alert('Please Provide all the fields')
    } else {
        $.post('/api/login',
            {
                mobile: loginMobile,
                password: loginPassword
            },
            function (data, status) {
                alert(data.message)
            });
    }
})