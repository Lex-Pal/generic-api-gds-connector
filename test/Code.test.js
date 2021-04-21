const mainService = require('../src/Code.js')['mainService'];
const buildFakeRequest = require('./helpers/FakeRequest.js')['default'];

test('getAuthType', () => {
    expect(mainService.getAuthType().type).toBe('NONE');
});

test('isAdminUser', () => {
    expect(mainService.isAdminUser()).toBe(true);
});

test('getData', () => {
    const fields = ['track_name', 'artist'];
    let request = buildFakeRequest({
        // startDate,
        // endDate,
        fields
    });

    const expected = {
        "rows": [
            {
                "postId": 1,
                "id": 1,
                "name": 'id labore ex et quam laborum',
                "email": 'Eliseo@gardner.biz',
                "body": 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
            }
        ],
        "schema": [
            {
                "dataType": "TEXT",
                "label": "name",
                "name": "name",
                "semantics": {
                    "conceptType": "DIMENSION"
                }
            },
            {
                "dataType": "TEXT",
                "label": "postId",
                "name": "postid",
                "semantics": {
                    "conceptType": "DIMENSION"
                }
            }
        ]
    };

    expect(mainService.getData(request)).toEqual(expected);
});

// test('getConfig', () => {
//     expect(mainService.getConfig().getDateRangeRequired).toBe(true);
// });