//business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}
//returns  the fullname
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);

            // If we didn't add last() to $(".contact"), each time a new contact was added, every element with the contact class would show the information of the most recently added contact on click.
        });

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");


    });
});