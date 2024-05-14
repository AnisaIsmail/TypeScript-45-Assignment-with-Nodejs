//guesst list: if you could invite anyone.living or deceased ,to dinner, who would you invite? make a list that includes at least three people you`d like to invite to dinner .Then use your list to print a message to each person. inviting them to dinner.
var guesst = ["Mehak", "Neha", "Maham"];
guesst.forEach(function (guesst) {
    console.log("Dear ".concat(guesst, ", would you like to join me for dinner?"));
});
