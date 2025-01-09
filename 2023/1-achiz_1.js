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
       



    

    function fun_row (row) {
        var i;
        i = row;
        if ( 10 == i || 11 == i || 12 == i || 13 == i || 14 == i || 15 == i || 16 == i || 17 == i || 18 == i || 19 == i ||
            140 == i || 141 == i || 20 == i || 70 == i || 80 == i || 81 == i || 100 == i || 110 == i || 111 == i || 112 == i || 115 == i 
            || 113 == i || 150 == i || 130 == i || 131)
            return true;
        }

//--------------------------------------------------------------

  //  cap II.Col.1 + Col.2 (rind10…rind150) = Col.3 + Col.7 + Col.8 + Col.9 (rind10…rind150)


    for (var i = 10; i <= 131; i++) {
        {
            if (fun_row(i)) {

                if (!isNaN(Number(values["CAP2_R" + i + "_C1"]))) {
                    var col1 = 0;
                    col1 = Number(values["CAP2_R" + i + "_C1"]);
                }

                if (!isNaN(Number(values["CAP2_R" + i + "_C2"]))) {
                    var col2 = 0;
                     col2 = Number(values["CAP2_R" + i + "_C2"]);
                }

                if (!isNaN(Number(values["CAP2_R" + i + "_C3"]))) {
                    var col3 = 0;
                    col3 = Number(values["CAP2_R" + i + "_C3"]);
                }


                if (!isNaN(Number(values["CAP2_R" + i + "_C7"]))) {
                    var col7 = 0;
                    col7 = Number(values["CAP2_R" + i + "_C7"]);
                }

                if (!isNaN(Number(values["CAP2_R" + i + "_C8"]))) {
                    var col8 = 0;
                    col8 = Number(values["CAP2_R" + i + "_C8"]);
                }


                if (!isNaN(Number(values["CAP2_R" + i + "_C9"]))) {
                    var col9 = 0;
                    col9 = Number(values["CAP2_R" + i + "_C9"]);
                }

                var SUM_C1_C2 = 0;
                var SUM_C3_C29 = 0;
                SUM_C1_C2 = col1 + col2; 
                SUM_C3_C29 = col3 + col7 + col8 + col9;

                if (SUM_C1_C2 !== SUM_C3_C29) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C1',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 54-015 cap II.Col.1 + Col.2 (rind10…rind150) = Col.3 + Col.7 + Col.8 + Col.9 (rind10…rind150) -  @SUM_C1_C2 !=  @SUM_C3_C29 ', { ' @SUM_C1_C2': SUM_C1_C2, '@SUM_C3_C29': SUM_C3_C29 })
                    });

                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C2',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 54-015 cap II.Col.1 + Col.2 (rind10…rind150) = Col.3 + Col.7 + Col.8 + Col.9 (rind10…rind150) -  @SUM_C1_C2 !=  @SUM_C3_C29 ', { ' @SUM_C1_C2': SUM_C1_C2, '@SUM_C3_C29': SUM_C3_C29 })
                    });


                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C3',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 54-015 cap II.Col.1 + Col.2 (rind10…rind150) = Col.3 + Col.7 + Col.8 + Col.9 (rind10…rind150) -  @SUM_C1_C2 !=  @SUM_C3_C29 ', { ' @SUM_C1_C2': SUM_C1_C2, '@SUM_C3_C29': SUM_C3_C29 })
                    });

                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C7',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 54-015 cap II.Col.1 + Col.2 (rind10…rind150) = Col.3 + Col.7 + Col.8 + Col.9 (rind10…rind150) -  @SUM_C1_C2 !=  @SUM_C3_C29 ', { ' @SUM_C1_C2': SUM_C1_C2, '@SUM_C3_C29': SUM_C3_C29 })
                    });

                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C8',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 54-015 cap II.Col.1 + Col.2 (rind10…rind150) = Col.3 + Col.7 + Col.8 + Col.9 (rind10…rind150) -  @SUM_C1_C2 !=  @SUM_C3_C29 ', { ' @SUM_C1_C2': SUM_C1_C2, '@SUM_C3_C29': SUM_C3_C29 })
                    });

                    webform.errors.push({
                        'fieldName': 'CAP2_R' + i + '_C9',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 54-015 cap II.Col.1 + Col.2 (rind10…rind150) = Col.3 + Col.7 + Col.8 + Col.9 (rind10…rind150) -  @SUM_C1_C2 !=  @SUM_C3_C29 ', { ' @SUM_C1_C2': SUM_C1_C2, '@SUM_C3_C29': SUM_C3_C29 })
                    });


                }
            }
        }
    }


    //-----------------------------------------

    // Checking  telefon 
    if (!values.PHONE || !/^[0-9]{9}$/.test(values.PHONE)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            // 'msg': Drupal.t(' Cod eroare: A.09 Introduceți doar un număr de telefon format din 9 cifre')
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))

        });
    }

    // Check if the first digit is 0
    if (values.PHONE && values.PHONE[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            // 'msg': Drupal.t(' Cod eroare: A.09 Prima cifră a numărului de telefon trebuie să fie 0')

            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
    //End  Checking  telefon

    if (!values.STREET) {
        webform.errors.push({
            'fieldName': 'STREET',
            'weight': 31,
            //'msg': Drupal.t('Câmpul nu este completat')
            'msg': concatMessage(' ', ' ', Drupal.t('Câmpul nu este completat'))
        });
    }


    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });



    webform.validatorsStatus['achiz_1'] = 1;
    validateWebform();
};



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
