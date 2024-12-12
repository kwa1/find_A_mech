const AWS = require('aws-sdk');
const location = new AWS.Location();
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { latitude, longitude } = JSON.parse(event.body);
    
    // Use AWS Location Service to find nearby mechanics
    const response = await location.searchPlaceIndexForPosition({
        IndexName: "MechanicLocationIndex",
        Position: [longitude, latitude]
    }).promise();

    const mechanics = response.Results.map(result => ({
        name: result.Place.Label,
        phone: result.Place.PhoneNumber,
        distance: result.Place.Distance
    }));

    return {
        statusCode: 200,
        body: JSON.stringify({ mechanics })
    };
};
