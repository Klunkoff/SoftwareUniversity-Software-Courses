function extractEmails(string) {
 
    let pattern = /\b(?<=\s)[A-Za-z0-9]+[-_.]*[A-Za-z0-9]+@[A-Za-z0-9]+[-_.][A-Za-z0-9+|\-_.]*\b/gm;
    let validEmails = string.match(pattern);
 
    for (email of validEmails) {
        console.log(email);
    }
}
 
extractEmails(`Please contact us at: support@github.com.`);
extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`);
extractEmails(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.`);