var QueryJson = require('./');

var school = {
    id: '201',
    name: 'SM High School',
    address: 'Mohadevpur, Naogaon',
    students: [
        {
            id: '1',
            name: 'Raju Ahmmed',
            subject: 'IT'
        },
        {
            id: '2',
            name: 'Hanif Mondol',
            subject: 'BSc'
        },
        {
            id: '3',
            name: 'Redu',
            subject: 'Bangla'
        },
        {
            id: '4',
            name: 'Shipu Ahmmed',
            subject: 'Medicale'
        }
    ]
}

var query = new QueryJson(school);

var data = query
                .start()
                .select('students')
                .where('subject', '=', 'IT')
                .select(0)
                .select('name')
                .get();

console.log(data);