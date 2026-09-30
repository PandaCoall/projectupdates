//#region node_modules/.nitro/vite/services/ssr/assets/team-BwqprQbA.js
/**
* The only people who can open the tracker.
* Owner can edit the board. Members can comment and add their own answers.
* Replace these with the real team. Emails are matched exactly, ignoring case.
*/
var TEAM = [{
	name: "Mary",
	email: "mary@hyraxteam",
	role: "owner"
}, {
	name: "Jay",
	email: "jeremiahworkpc@gmail.com",
	role: "owner"
}];
function matchTeam(email) {
	const clean = email.trim().toLowerCase();
	return TEAM.find((member) => member.email.toLowerCase() === clean) ?? null;
}
//#endregion
export { matchTeam as n, TEAM as t };
