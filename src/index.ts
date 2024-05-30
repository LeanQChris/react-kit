export class StringtoLowercase {

    static ToLower(stringName: string) {
        let lower = "";
        for (var i = 0; i < stringName.length; i++) {
            var value = stringName.charCodeAt(i);
            if (value >= 65 && value <= 90) {
                lower += String.fromCharCode(value + 32);
            }
            else {
                lower += stringName[i];
            }
        }
        console.log(lower);
    }
}