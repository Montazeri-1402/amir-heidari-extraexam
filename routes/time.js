var express = require('express');
var router = express.Router();
let timedb = [
    { id: 1, proId: 2, title: 't1', startTime: '14:30', endTime: '17:00', date: "1400/07/01" },
    { id: 2, proId: 2, title: 't2', startTime: '18:30', endTime: '17:20', date: "1401/04/18" },
    { id: 3, proId: 1, title: 't3', startTime: '15:25', endTime: '17:45', date: "1399/14/25" },
    { id: 4, proId: 3, title: 't4', startTime: '08:00', endTime: '17:40', date: "1380/09/09" }
];

router.get('/', (req, res, next) => {
    let proId = req.query.timeId
    let tpro = [];

    timedb.filter((element) => {
        if (element.proId === proId) {
            tpro.push(element)
        }
    });

    res.send(tpro);

});
router.post('/', (req, res,index) => {

    req.body.id = timedb.length + 1;
    timedb.push(req.body);

    res.send(req.body);

})

router.put('/', (req, res,index) => {

    let id = req.query.id;

    for (let index = 0; index < timedb.length; index++) {

        const element = array[index];

        if(element.id == id){
            timedb[index] = req.body;
            break;
        }
        
    }
    res.send(req.body);
})
module.exports = router;