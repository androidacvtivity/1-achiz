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


    // Call the validation functions for CAP2
    const row10ErrorsCap2 = validateRow10SumCap2(values);
    const row11ErrorsCap2 = validateRow11SumCap2(values);

    // Push errors into webform if validation fails
    if (row10ErrorsCap2) {
        row10ErrorsCap2.forEach(error => webform.errors.push(error));
    }
    if (row11ErrorsCap2) {
        row11ErrorsCap2.forEach(error => webform.errors.push(error));
    }

    const row180Errors = validateRow180Sum(values);

    // Push errors into webform if validation fails
    if (row180Errors) {
        row180Errors.forEach(error => webform.errors.push(error));
    }

    // Call the validation function for row 120
    const row120Errors = validateRow120Sum(values);

    // Push errors into webform if validation fails
    if (row120Errors) {
        row120Errors.forEach(error => webform.errors.push(error));
    }

    // Call the validation function for row 10
    const row10Errors = validateRow10Sum(values);

    // Push errors into webform if validation fails
    if (row10Errors) {
        row10Errors.forEach(error => webform.errors.push(error));
    }
    

    //----------------------------------------


    // Call the validation function for row 11
    const row11Errors = validateRow11Sum(values);

    // Push errors into webform if validation fails
    if (row11Errors) {
        row11Errors.forEach(error => webform.errors.push(error));
    }


    // Call the validation function for row 80
    const row80Errors = validateRow80Sum(values);

    // Push errors into webform if validation fails
    if (row80Errors) {
        row80Errors.forEach(error => webform.errors.push(error));
    }


    // Call the validation function for row 113
    const row113Errors = validateRow113Sum(values);

    // Push errors into webform if validation fails
    if (row113Errors) {
        row113Errors.forEach(error => webform.errors.push(error));
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

function validateRow180Sum(values) {
    let errors = [];

    // Define the maximum number of columns based on the dataset
    let maxColumns = 9; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        // Parse values as numbers, ensuring they are not NaN
        let row180 = isNaN(Number(values[`CAP1_R180_C${i}`])) ? 0 : Number(values[`CAP1_R180_C${i}`]);
        let row181 = isNaN(Number(values[`CAP1_R181_C${i}`])) ? 0 : Number(values[`CAP1_R181_C${i}`]);
        let row182 = isNaN(Number(values[`CAP1_R182_C${i}`])) ? 0 : Number(values[`CAP1_R182_C${i}`]);
        let row183 = isNaN(Number(values[`CAP1_R183_C${i}`])) ? 0 : Number(values[`CAP1_R183_C${i}`]);
        let row184 = isNaN(Number(values[`CAP1_R184_C${i}`])) ? 0 : Number(values[`CAP1_R184_C${i}`]);
        let row185 = isNaN(Number(values[`CAP1_R185_C${i}`])) ? 0 : Number(values[`CAP1_R185_C${i}`]);

        // Calculate the expected sum
        let expectedSum = row181 + row182 + row183 + row184 + row185;

        // Check if Row 180 is equal to the calculated sum
        if (row180 !== expectedSum) {
            errors.push({
                'fieldName': `CAP1_R180_C${i}`, // Dynamic field name with column index
                'msg': Drupal.t(
                    `Cod eroare: 54-010, Cap I, Rând 180 trebuie să fie egal cu suma rândurilor 181 - 185 în coloana ${i}. 
                    Valoare actuală: ${row180}, Valoare așteptată: ${expectedSum}`
                )
            });
        }
    }

    return errors.length > 0 ? errors : null;
}



function validateRow10Sum(values) {
    let errors = [];

    // Define the maximum number of columns based on the dataset
    let maxColumns = 8; // Adjust if needed

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

function validateRow11Sum(values) {
    let errors = [];

    // Define the maximum number of columns based on the dataset
    let maxColumns = 8; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        // Parse values as numbers, ensuring they are not NaN
        let row11 = isNaN(Number(values[`CAP1_R11_C${i}`])) ? 0 : Number(values[`CAP1_R11_C${i}`]);
        let row12 = isNaN(Number(values[`CAP1_R12_C${i}`])) ? 0 : Number(values[`CAP1_R12_C${i}`]);
        let row13 = isNaN(Number(values[`CAP1_R13_C${i}`])) ? 0 : Number(values[`CAP1_R13_C${i}`]);

        // Calculate the expected sum
        let expectedSum = row12 + row13;

        // Check if Row 11 is equal to the calculated sum
        if (row11 !== expectedSum) {
            errors.push({
                'fieldName': `CAP1_R11_C${i}`, // Dynamic field name with column index
                'msg': Drupal.t(
                    `Cod eroare: 54-002, Cap I, Rând 11 trebuie să fie egal cu suma rândurilor 12 și 13 în coloana ${i}. 
                    Valoare actuală: ${row11}, Valoare așteptată: ${expectedSum}`
                )
            });
        }
    }

    return errors.length > 0 ? errors : null;
}


function validateRow80Sum(values) {
    let errors = [];

    // Define the maximum number of columns based on the dataset
    let maxColumns = 8; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        // Parse values as numbers, ensuring they are not NaN
        let row80 = isNaN(Number(values[`CAP1_R80_C${i}`])) ? 0 : Number(values[`CAP1_R80_C${i}`]);
        let row81 = isNaN(Number(values[`CAP1_R81_C${i}`])) ? 0 : Number(values[`CAP1_R81_C${i}`]);
        let row82 = isNaN(Number(values[`CAP1_R82_C${i}`])) ? 0 : Number(values[`CAP1_R82_C${i}`]);
        let row83 = isNaN(Number(values[`CAP1_R83_C${i}`])) ? 0 : Number(values[`CAP1_R83_C${i}`]);
        let row84 = isNaN(Number(values[`CAP1_R84_C${i}`])) ? 0 : Number(values[`CAP1_R84_C${i}`]);
        let row85 = isNaN(Number(values[`CAP1_R85_C${i}`])) ? 0 : Number(values[`CAP1_R85_C${i}`]);
        let row86 = isNaN(Number(values[`CAP1_R86_C${i}`])) ? 0 : Number(values[`CAP1_R86_C${i}`]);
        let row87 = isNaN(Number(values[`CAP1_R87_C${i}`])) ? 0 : Number(values[`CAP1_R87_C${i}`]);
        let row88 = isNaN(Number(values[`CAP1_R88_C${i}`])) ? 0 : Number(values[`CAP1_R88_C${i}`]);
        let row89 = isNaN(Number(values[`CAP1_R89_C${i}`])) ? 0 : Number(values[`CAP1_R89_C${i}`]);
        let row90 = isNaN(Number(values[`CAP1_R90_C${i}`])) ? 0 : Number(values[`CAP1_R90_C${i}`]);
        let row91 = isNaN(Number(values[`CAP1_R91_C${i}`])) ? 0 : Number(values[`CAP1_R91_C${i}`]);
        let row92 = isNaN(Number(values[`CAP1_R92_C${i}`])) ? 0 : Number(values[`CAP1_R92_C${i}`]);

        // Calculate the expected sum
        let expectedSum = row81 + row82 + row83 + row84 + row85 + row86 + row87 + row88 + row89 + row90 + row91 + row92;

        // Check if Row 80 is equal to the calculated sum
        if (row80 !== expectedSum) {
            errors.push({
                'fieldName': `CAP1_R80_C${i}`, // Dynamic field name with column index
                'msg': Drupal.t(
                    `Cod eroare: 54-003, Cap I, Rând 80 trebuie să fie egal cu suma rândurilor 81 - 92 în coloana ${i}. 
                    Valoare actuală: ${row80}, Valoare așteptată: ${expectedSum}`
                )
            });
        }
    }

    return errors.length > 0 ? errors : null;
}



function validateRow113Sum(values) {
    let errors = [];

    // Define the maximum number of columns based on the dataset
    let maxColumns = 9; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        // Parse values as numbers, ensuring they are not NaN
        let row113 = isNaN(Number(values[`CAP1_R113_C${i}`])) ? 0 : Number(values[`CAP1_R113_C${i}`]);
        let row1131 = isNaN(Number(values[`CAP1_R1131_C${i}`])) ? 0 : Number(values[`CAP1_R1131_C${i}`]);
        let row1132 = isNaN(Number(values[`CAP1_R1132_C${i}`])) ? 0 : Number(values[`CAP1_R1132_C${i}`]);
        let row1133 = isNaN(Number(values[`CAP1_R1133_C${i}`])) ? 0 : Number(values[`CAP1_R1133_C${i}`]);
        let row1134 = isNaN(Number(values[`CAP1_R1134_C${i}`])) ? 0 : Number(values[`CAP1_R1134_C${i}`]);
        let row1135 = isNaN(Number(values[`CAP1_R1135_C${i}`])) ? 0 : Number(values[`CAP1_R1135_C${i}`]);
        let row1136 = isNaN(Number(values[`CAP1_R1136_C${i}`])) ? 0 : Number(values[`CAP1_R1136_C${i}`]);
        let row1137 = isNaN(Number(values[`CAP1_R1137_C${i}`])) ? 0 : Number(values[`CAP1_R1137_C${i}`]);
        let row1138 = isNaN(Number(values[`CAP1_R1138_C${i}`])) ? 0 : Number(values[`CAP1_R1138_C${i}`]);
        let row1139 = isNaN(Number(values[`CAP1_R1139_C${i}`])) ? 0 : Number(values[`CAP1_R1139_C${i}`]);

        // Calculate the expected sum
        let expectedSum = row1131 + row1132 + row1133 + row1134 + row1135 + row1136 + row1137 + row1138 + row1139;

        // Check if Row 113 is equal to the calculated sum
        if (row113 !== expectedSum) {
            errors.push({
                'fieldName': `CAP1_R113_C${i}`, // Dynamic field name with column index
                'msg': Drupal.t(
                    `Cod eroare: 54-007, Cap I, Rând 113 trebuie să fie egal cu suma rândurilor 113.1 - 113.9 în coloana ${i}. 
                    Valoare actuală: ${row113}, Valoare așteptată: ${expectedSum}`
                )
            });
        }
    }

    return errors.length > 0 ? errors : null;
}


function validateRow120Sum(values) {
    let errors = [];

    // Define the maximum number of columns based on the dataset
    let maxColumns = 9; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        // Parse values as numbers, ensuring they are not NaN
        let row120 = isNaN(Number(values[`CAP1_R120_C${i}`])) ? 0 : Number(values[`CAP1_R120_C${i}`]);
        let row1201 = isNaN(Number(values[`CAP1_R1201_C${i}`])) ? 0 : Number(values[`CAP1_R1201_C${i}`]);
        let row1202 = isNaN(Number(values[`CAP1_R1202_C${i}`])) ? 0 : Number(values[`CAP1_R1202_C${i}`]);
        let row1203 = isNaN(Number(values[`CAP1_R1203_C${i}`])) ? 0 : Number(values[`CAP1_R1203_C${i}`]);
        let row1204 = isNaN(Number(values[`CAP1_R1204_C${i}`])) ? 0 : Number(values[`CAP1_R1204_C${i}`]);

        // Calculate the expected sum
        let expectedSum = row1201 + row1202 + row1203 + row1204;

        // Check if Row 120 is equal to the calculated sum
        if (row120 !== expectedSum) {
            errors.push({
                'fieldName': `CAP1_R120_C${i}`, // Dynamic field name with column index
                'msg': Drupal.t(
                    `Cod eroare: 54-008, Cap I, Rând 120 trebuie să fie egal cu suma rândurilor 120.1 - 120.4 în coloana ${i}. 
                    Valoare actuală: ${row120}, Valoare așteptată: ${expectedSum}`
                )
            });
        }
    }

    return errors.length > 0 ? errors : null;
}


function validateRow10SumCap2(values) {
    let errors = [];
    let maxColumns = 9; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        let row10 = isNaN(Number(values[`CAP2_R10_C${i}`])) ? 0 : Number(values[`CAP2_R10_C${i}`]);
        let row11 = isNaN(Number(values[`CAP2_R11_C${i}`])) ? 0 : Number(values[`CAP2_R11_C${i}`]);
        let row14 = isNaN(Number(values[`CAP2_R14_C${i}`])) ? 0 : Number(values[`CAP2_R14_C${i}`]);
        let row15 = isNaN(Number(values[`CAP2_R15_C${i}`])) ? 0 : Number(values[`CAP2_R15_C${i}`]);
        let row16 = isNaN(Number(values[`CAP2_R16_C${i}`])) ? 0 : Number(values[`CAP2_R16_C${i}`]);
        let row17 = isNaN(Number(values[`CAP2_R17_C${i}`])) ? 0 : Number(values[`CAP2_R17_C${i}`]);
        let row18 = isNaN(Number(values[`CAP2_R18_C${i}`])) ? 0 : Number(values[`CAP2_R18_C${i}`]);
        let row19 = isNaN(Number(values[`CAP2_R19_C${i}`])) ? 0 : Number(values[`CAP2_R19_C${i}`]);
        let row140 = isNaN(Number(values[`CAP2_R140_C${i}`])) ? 0 : Number(values[`CAP2_R140_C${i}`]);
        let row141 = isNaN(Number(values[`CAP2_R141_C${i}`])) ? 0 : Number(values[`CAP2_R141_C${i}`]);

        let expectedSum = row11 + row14 + row15 + row16 + row17 + row18 + row19 + row140 + row141;

        if (row10 !== expectedSum) {
            errors.push({
                'fieldName': `CAP2_R10_C${i}`,
                'msg': Drupal.t(
                    `Cod eroare: 54-011, Cap II, Rând 10 trebuie să fie egal cu suma rândurilor 11, 14, 15, 16, 17, 18, 19, 140 și 141 în coloana ${i}. 
                    Valoare actuală: ${row10}, Valoare așteptată: ${expectedSum}`
                )
            });
        }
    }
    return errors.length > 0 ? errors : null;
}

function validateRow11SumCap2(values) {
    let errors = [];
    let maxColumns = 9; // Adjust if needed

    for (let i = 1; i <= maxColumns; i++) {
        let row11 = isNaN(Number(values[`CAP2_R11_C${i}`])) ? 0 : Number(values[`CAP2_R11_C${i}`]);
        let row12 = isNaN(Number(values[`CAP2_R12_C${i}`])) ? 0 : Number(values[`CAP2_R12_C${i}`]);
        let row13 = isNaN(Number(values[`CAP2_R13_C${i}`])) ? 0 : Number(values[`CAP2_R13_C${i}`]);

        let expectedSum = row12 + row13;

        if (row11 !== expectedSum) {
            errors.push({
                'fieldName': `CAP2_R11_C${i}`,
                'msg': Drupal.t(
                    `Cod eroare: 54-012, Cap II, Rând 11 trebuie să fie egal cu suma rândurilor 12 și 13 în coloana ${i}. 
                    Valoare actuală: ${row11}, Valoare așteptată: ${expectedSum}`
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
