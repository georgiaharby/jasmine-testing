/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * Test checks that each feed in the allFeeds object have defined a URL
         * and that the URl property is not empty.
         */
         describe("All Feeds URL", function () {
           it("is defined", function () {
             for (var i = 0; i < allFeeds.length; i++) {
               expect(allFeeds[i].url).toBeDefined();
             }
           });

           it("is not empty", function () {
             for (var i = 0; i < allFeeds.length; i++) {
               expect(allFeeds[i].url).not.toBe('');
             }
           });
         });

        /**
         * Tests that each feed in the allFeeds object have defined a name and
         * that the name is not empty.
         */
        describe("All Feeds Name", function () {
          it("is defined", function () {
            for(var i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].name).toBeDefined();
            }
          });

          it("is not empty", function () {
            for(var i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].name).not.toBe('');
            }
          });
        });
    });

    /**
     * Test suite that tests if the menus default is 'menu-hidden'.
     * When clicking the menu icon, the class on the body toggles.
     */
    describe("The Menu", function () {
      it("is hidden by default", function () {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      it("changes visibility when clicked", function () {
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });
    });

    /**
     * Test suite that tests whether the feed container has any children nested
     * when the loadfeed function has finished running. Checked the length of
     * .feed children.
     */
    describe("Initial Entries", function () {

      beforeEach(function (done) {
        loadFeed(0, done);
      });

      it("in feed-container", function (done) {
        expect($('.feed .entry').length).not.toBe(0);
        done();
      });
    });

    /**
     * Test suite that tests whether there is different content when loading a
     * different feed. Stored .ffed children text from two different feeds in
     * two variables and compared the two variables.
     * @type {[type]}
     */
    describe("New Feed Selection", function () {
      var one;
      var two;
      beforeEach(function (done) {
        loadFeed(0, function () {
          one = $('.feed').children().text();
          done();
        });
      });

      it ("content changes", function (done) {
        loadFeed(1, function () {
          two = $('.feed').children().text();
          expect(one).not.toEqual(two);
          done();
        });
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
