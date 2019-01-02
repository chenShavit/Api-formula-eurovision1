/**
 * @api {post} /points/pointsByCountyAndYear
 * 
 * PointsByCountyAndYear
 * 
 * @apiVersion 0.1.0
 * @apiName Points
 * @apiGroup Points
 * 
 * @apiDescription Points
 * 
 * @apiParam (Point) {String} string_dir "from" || "to"
 * @apiParam (Point) {Number} year 1956-2018 , -1 will give you the average results of all years
 * @apiParam (Point) {String} country if empty string will give you all the country points of all years
 * 
 * @apiSampleRequest /points/pointsByCountyAndYear
 * 
 * @apiParamExample {json} Request-Example:
{
	"string_dir":"from",
	"year":2015,
	"country":"Latvia"
}
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
[
    {
        "_id": "5c26a3c4bf2c15cd92349295",
        "year": 2015,
        "country": "Latvia",
        "voted_to": [
            {
                "country": "Sweden",
                "points": 12
            },
            {
                "country": "Russia",
                "points": 10
            },
            {
                "country": "Italy",
                "points": 8
            },
            {
                "country": "Lithuania",
                "points": 7
            },
            {
                "country": "Estonia",
                "points": 6
            },
            {
                "country": "Australia",
                "points": 5
            },
            {
                "country": "Belgium",
                "points": 4
            },
            {
                "country": "Slovenia",
                "points": 3
            },
            {
                "country": "Norway",
                "points": 2
            },
            {
                "country": "Israel",
                "points": 1
            },
            {
                "country": "Albania",
                "points": 0
            },
            {
                "country": "Armenia",
                "points": 0
            },
            {
                "country": "Austria",
                "points": 0
            },
            {
                "country": "Azerbaijan",
                "points": 0
            },
            {
                "country": "Cyprus",
                "points": 0
            },
            {
                "country": "France",
                "points": 0
            },
            {
                "country": "Georgia",
                "points": 0
            },
            {
                "country": "Germany",
                "points": 0
            },
            {
                "country": "Greece",
                "points": 0
            },
            {
                "country": "Hungary",
                "points": 0
            },
            {
                "country": "Montenegro",
                "points": 0
            },
            {
                "country": "Poland",
                "points": 0
            },
            {
                "country": "Romania",
                "points": 0
            },
            {
                "country": "Serbia",
                "points": 0
            },
            {
                "country": "Spain",
                "points": 0
            },
            {
                "country": "UnitedKingdom",
                "points": 0
            }
        ]
    }
]
*
*/

