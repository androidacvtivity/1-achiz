(function ($) {
    Drupal.behaviors.achiz_1 = {
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery('input.float').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
        }
    }
})(jQuery);




webform.validators.achiz_1 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

    // Call the validation function for row 10
    const row10Errors = validateRow10Sum(values);

    // Push errors into webform if validation fails
    if (row10Errors) {
        row10Errors.forEach(error => webform.errors.push(error));
    }
    

    validatePhoneNumber(values.PHONE);
    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });



    webform.validatorsStatus['achiz_1'] = 1;
    validateWebform();
};

function validatePhoneNumber(phone) {
    // Check if the phone number is valid (exactly 9 digits)
    if (!phone || !/^[0-9]{9}$/.test(phone)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))
        });
    }

    // Check if the first digit is 0
    if (phone && phone[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
}


function validateRow10Sum(values) {
    let errors = [];

    // Define the maximum number of columns based on the dataset
    let maxColumns = 9; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        // Parse values as numbers, ensuring they are not NaN
        let row10 = isNaN(Number(values[`CAP1_R10_C${i}`])) ? 0 : Number(values[`CAP1_R10_C${i}`]);
        let row11 = isNaN(Number(values[`CAP1_R11_C${i}`])) ? 0 : Number(values[`CAP1_R11_C${i}`]);
        let row14 = isNaN(Number(values[`CAP1_R14_C${i}`])) ? 0 : Number(values[`CAP1_R14_C${i}`]);
        let row15 = isNaN(Number(values[`CAP1_R15_C${i}`])) ? 0 : Number(values[`CAP1_R15_C${i}`]);
        let row16 = isNaN(Number(values[`CAP1_R16_C${i}`])) ? 0 : Number(values[`CAP1_R16_C${i}`]);
        let row17 = isNaN(Number(values[`CAP1_R17_C${i}`])) ? 0 : Number(values[`CAP1_R17_C${i}`]);
        let row18 = isNaN(Number(values[`CAP1_R18_C${i}`])) ? 0 : Number(values[`CAP1_R18_C${i}`]);
        let row19 = isNaN(Number(values[`CAP1_R19_C${i}`])) ? 0 : Number(values[`CAP1_R19_C${i}`]);

        // Calculate the expected sum
        let expectedSum = row11 + row14 + row15 + row16 + row17 + row18 + row19;

        // Check if Row 10 is equal to the calculated sum
        if (row10 !== expectedSum) {
            errors.push({
                'fieldName': `CAP1_R10_C${i}`, // Dynamic field name with column index
                'msg': Drupal.t(
                    `Cod eroare: 54-001, Cap I, Rând 10 trebuie să fie egal cu suma rândurilor 11, 14, 15, 16, 17, 18 și 19 în coloana ${i}. 
                    Valoare actuală: ${row10}, Valoare așteptată: ${expectedSum}`
                )
            });
        }
    }

    return errors.length > 0 ? errors : null;
}


function concatMessage(errorCode, fieldTitle, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }

    if (fieldTitle) {
        titleParts.push(fieldTitle);
    }

    if (titleParts.length) {
        msg = titleParts.join(', ') + '. ' + msg;
    }

    return msg;
}

function getErrorMessage(errorCode) {
    return Drupal.t('Error code: @error_code', { '@error_code': errorCode });
}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.weight = 9999;
    }

    if (!b.hasOwnProperty('weight')) {
        b.weight = 9999;
    }

    return toFloat(a.weight) - toFloat(b.weight);
}
