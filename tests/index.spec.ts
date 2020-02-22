import { GroupsIO } from '../src/index';
test('Test Init', () => {
	expect(GroupsIO).toBeDefined();
	const groupIO = new GroupsIO();
	expect(groupIO.IsLoggedIn()).toBeFalsy();
});