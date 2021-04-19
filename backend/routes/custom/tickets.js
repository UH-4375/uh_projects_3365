const express = require('express')
const router = express.Router({ caseSensitive: true })

//https://grokonez.com/frontend/vue-js/vue-js-nodejs-express-restapis-sequelize-orm-mysql-crud-example

router.get('/find', (req, res, next) => {
    const db = req.app.get('db')

    return db.ticketLog.findAll({
        include: [
            {
                model: db.users,
                as: 'createdBy',
                attributes: ['user_id','email','f_name','l_name']
            },
            {
                model: db.users,
                as: 'assignedUser',
                attributes: ['user_id','email','f_name','l_name']
            },
            {
                model: db.assetList,
                attributes: ['asset_id','asset_name']
            },
            {
                model: db.issueCategory,
                attributes: ['issueCategory_id','issueCategory_name']
            },
            {
                model: db.issueType,
                attributes: ['issueType_id','issueType_name']
            },
            {
                model: db.locations,
                attributes: ['location_id','location_name']
            },
            {
                model: db.priorityList,
                attributes: ['priority_id','priority_name']
            },
            {
                model: db.requestStatus,
                attributes: ['requestStatus_id','requestStatus_name']
            },
            {
                model: db.resolvedList,
                attributes: ['resolvedList_id','resolvedList_name']
            },
            {
                model: db.softwareAssets,
                attributes: ['software_id','software_name']
            },
            {
                model: db.teams,
                attributes: ['team_id','team_name']
            }
        ]
        //raw : true
    })
        .then((ticketLog) => {
            res.send(ticketLog)
        })
        .catch((err) => {
            console.log('There was an error querying tickets', JSON.stringify(err))
            return res.send(err)
        });
})

router.get('/findlist', (req, res, next) => {
    const db = req.app.get('db')

    return db.tickets.findAll({
        attributes:['ticket_id','ticket_name'],
        raw : true,
    })
        .then((tickets) => res.send(tickets))
        .catch((err) => {
            console.log('There was an error querying tickets', JSON.stringify(err))
            return res.send(err)
        });
})

router.get('/find/:ticketID', (req, res, next) => {
    const ticket_id = req.params.ticketID
    const db = req.app.get('db')

    return db.ticketLog.find({
        where: {ticket_id:ticket_id},
        include: [
            {
                model: db.users,
                as: 'createdBy',
                attributes: ['user_id','email','f_name','l_name']
            },
            {
                model: db.users,
                as: 'assignedUser',
                attributes: ['user_id','email','f_name','l_name']
            },
            {
                model: db.teams,
                attributes: ['team_id','team_name']
            },
            {
                model: db.assetList,
                attributes: ['asset_id','asset_name']
            },
            {
                model: db.issueCategory,
                attributes: ['issueCategory_id','issueCategory_name']
            },
            {
                model: db.issueType,
                attributes: ['issueType_id','issueType_name']
            },
            {
                model: db.locations,
                attributes: ['location_id','location_name']
            },
            {
                model: db.priorityList,
                attributes: ['priority_id','priority_name']
            },
            {
                model: db.requestStatus,
                attributes: ['requestStatus_id','requestStatus_name']
            },
            {
                model: db.resolvedList,
                attributes: ['resolvedList_id','resolvedList_name']
            },
            {
                model: db.softwareAssets,
                attributes: ['software_id','software_name']
            },
        ]
    })
        .then((ticketLog) => {
            res.send(ticketLog)
        })
        .catch((err) => {
            console.log('There was an error querying tickets', JSON.stringify(err))
            return res.send(err)
        });
})

router.post('/create', (req, res, next) => {
    const db = req.app.get('db')

    //console.log(JSON.stringify(req.body))

    db.ticketLog.create({
        ticket_title: req.body.ticketName,
        ticket_description: req.body.ticketDescription,
        locationId: req.body.locationId,
        created_by: req.body.createdById,
        assetId: req.body.assetId,
        softwareId: req.body.softwareId,
        requestStatusId: req.body.requestStatusId,
        issueId: req.body.issueId,
        priorityId: req.body.priorityId,
        issueCategoryId: req.body.issueCategoryId
        })
        .then((result) => {
            res.json(result.ticket_id)
            //res.status(200).send('OK');
            //console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@' + result.ticket_id)
        })
        .catch(err => {
        console.log('There was an error creating a ticket', JSON.stringify(err))
        return res.send(err)
    })
})

router.put('/update/:ticketID', (req, res, next) => {

    const db = req.app.get('db')

    //console.log(JSON.stringify(req.body))

    db.ticketLog.update({
        ticket_title: req.body.ticketName,
        ticket_description: req.body.ticketDescription,
        locationId: req.body.locationId,
        assetId: req.body.assetId,
        softwareId: req.body.softwareId,
        requestStatusId: req.body.requestStatusId,
        issueId: req.body.issueId,
        priorityId: req.body.priorityId,
        issueCategoryId: req.body.issueCategoryId
    }, {
        where: {
            ticket_id: req.params.ticketID
        }
    })
        .then(() => {
            res.status(200).send('OK');
        })
        .catch(err => {
            console.log('There was an error updating tickets', JSON.stringify(err))
            return res.send(err)
        })
})

router.put('/assign/:ticketID', (req, res, next) => {

    const db = req.app.get('db')

    //console.log(JSON.stringify(req.body))

    db.ticketLog.update({
        assigned_user: req.body.assignedToId,
        teamId: req.body.assignedTeamId
    }, {
        where: {
            ticket_id: req.params.ticketID
        }
    })
        .then(() => {
            res.status(200).send('OK');
        })
        .catch(err => {
            console.log('There was an error updating tickets', JSON.stringify(err))
            return res.send(err)
        })
})

router.delete('/delete/:ticketID', (req, res, next) => {
    const ticket_id = req.params.ticketID;
    const db = req.app.get('db')

    db.users.destroy({
        where: { ticket_id: ticket_id }
    }).then(() => {
        res.status(200).send('The record has been deleted!');
    }).catch(err => {
        console.log('There was an error deleting tickets', JSON.stringify(err))
        return res.send(err)
    });
})

module.exports = router