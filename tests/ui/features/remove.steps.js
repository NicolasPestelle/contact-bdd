/**
 * Created by npestell on 04/12/17.
 */

const {Given, Then, When }= require('cucumber');

Given(/^The contact list is display$/, function callback() {
    this.browser.visit("/", (err) => {
        var contact = this.browser.tabs.current.Contact.Contacts.instance(); //on recupere les contacts

        /*forEach(contact){     pour chacun des contacts on vérifie que ce sont bien eux d'afficher ??
            assertTrue()
        }*/

        callback();

    });

});

When(/^User clicks on remove button of the first contact$/, function callback() {
    this.browser.visit("/",(err) => {

        var contactB = this.browser.tabs.current.Contact.Contacts.size();
        var bouton = this.browser.query('table tbody tr td a');

        bouton.click();
        var contactA = this.browser.tabs.current.Contact.Contacts.size();


        assert.ok(contactB > contactA);
       callback();

    });

});

Then(/^The first contact is removed$/, function callback() {
    this.browser.visit("/",(err) => {

        callback().pending();

    });

});