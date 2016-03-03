/**
 * Created by jramamoorthy on 03/03/16.
 */

module.exports = function (req, res, next) {
    var userName = req.body.user_name;
    var botPayload = {
        text : 'Hello, ' + userName + '!'
    };

    // avoid infinite loop
    if (userName !== 'slackbot') {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
}