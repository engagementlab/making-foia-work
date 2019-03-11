'use strict';
/**
 * Developed by Engagement Lab, 2019
 * ==============
 * Route to retrieve data by url
 * @class api
 * @author Johnny Richardson
 *
 * ==========
 */


var buildData = (options, res) => {

}

/*
 * Get data
 */
exports.get = function (req, res) {

    let options = {};
    if (req.params.model)
        options.model = req.params.model;

    return buildData(options, res);

}
