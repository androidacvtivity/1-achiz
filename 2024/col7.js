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
