"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 22;
score = 44;
score = '55';
var nckv = { name: 'nckv', id: 332 };
nckv = { username: 'nc', id: 323 };
getDBId(3);
getDBId('3');
function getDBId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
// Array
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = ['1', '2', 3, true];
var data4 = ['1', '2', 3, true];
var seatAllotment;
seatAllotment = 'aisle';
