var test = require('tape');
var QueryJson = require('../');

var school = {
    id: '201',
    name: 'SM High School',
    address: 'Mohadevpur, Naogaon',
    students: []
}

var query = new QueryJson(school);

test('Is Object?', function (t) {
    t.equal(typeof query, 'object');
    t.end();
});

test('Is instance of QueryJson?', function (t) {
    if(query instanceof QueryJson){
        t.pass('Yes');
    } else {
        t.fail('No');
    }
    t.end();
});