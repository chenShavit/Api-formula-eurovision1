/**
 * @api {post} /points/pointsByCountyAndYear
 * 
 * PointsByCountyAndYear
 * 
 * @apiVersion 0.1.0
 * @apiName Eurovision
 * @apiGroup Points
 * 
 * @apiDescription Points
 * 
 * @apiParam (Point) {String} string_dir "from" || "to"
 * @apiParam (Point) {Number} year 1956-2018 , -1 will give you the average results of all years
 * @apiParam (Point) {String} country if empty string will give you all the country points of all years
 * 
 * @apiSampleRequest https://young-lake-62037.herokuapp.com/points/pointsByCountyAndYear
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
        "voted": [
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
 * @api {get} /flags/getAllFlags
 * 
 * getAllFlags
@apiGroup Flags
 * 
 * @apiDescriptionFlagsAllCountries
 * 
 * @apiSampleRequest https://young-lake-62037.herokuapp.com/flags/getAllFlags
 * 
 * @apiParamExample {json} Request-Example:
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
[
    {
        "_id": "5c2937d0bf2c15dfc1455697",
        "Albania": "https://eschome.net/flags/AL.png",
        "Andorra": "https://eschome.net/flags/AD.png",
        "Armenia": "https://eschome.net/flags/AM.png",
        "Australia": "https://eschome.net/flags/AU.png",
        "Austria": "https://eschome.net/flags/AT.png",
        "Azerbaijan": "https://eschome.net/flags/AZ.png",
        "Belarus": "https://eschome.net/flags/BY.png",
        "Belgium": "https://eschome.net/flags/BE.png",
        "Bosnia & Herzegovina": "https://eschome.net/flags/BA.png",
        "Bulgaria": "https://eschome.net/flags/BG.png",
        "Croatia": "https://eschome.net/flags/HR.png",
        "Cyprus": "https://eschome.net/flags/CY.png",
        "Czech Republic": "https://eschome.net/flags/CZ.png",
        "Denmark": "https://eschome.net/flags/DK.png",
        "Estonia": "https://eschome.net/flags/EE.png",
        "Finland": "https://eschome.net/flags/FI.png",
        "France": "https://eschome.net/flags/FR.png",
        "FYR Macedonia": "https://eschome.net/flags/MK.png",
        "Georgia": "https://eschome.net/flags/GE.png",
        "Germany": "https://eschome.net/flags/DE.png",
        "Greece": "https://eschome.net/flags/GR.png",
        "Hungary": "https://eschome.net/flags/HU.png",
        "Iceland": "https://eschome.net/flags/IS.png",
        "Ireland": "https://eschome.net/flags/IE.png",
        "Israel": "https://eschome.net/flags/IL.png",
        "Italy": "https://eschome.net/flags/IT.png",
        "Latvia": "https://eschome.net/flags/LV.png",
        "Lithuania": "https://eschome.net/flags/LT.png",
        "Luxembourg": "https://eschome.net/flags/LU.png",
        "Malta": "https://eschome.net/flags/MT.png",
        "Marocco": "https://eschome.net/flags/MA.png",
        "Moldova": "https://eschome.net/flags/MD.png",
        "Monaco": "https://eschome.net/flags/MC.png",
        "Montenegro": "https://eschome.net/flags/ME.png",
        "Netherlands": "https://eschome.net/flags/NL.png",
        "Norway": "https://eschome.net/flags/NO.png",
        "Poland": "https://eschome.net/flags/PL.png",
        "Portugal": "https://eschome.net/flags/PT.png",
        "Romania": "https://eschome.net/flags/RO.png",
        "Russia": "https://eschome.net/flags/RU.png",
        "San Marino": "https://eschome.net/flags/SM.png",
        "Serbia": "https://eschome.net/flags/RS.png",
        "Serbia & Montenegro": "https://eschome.net/flags/CS.png",
        "Slovakia": "https://eschome.net/flags/SK.png",
        "Slovenia": "https://eschome.net/flags/SI.png",
        "Spain": "https://eschome.net/flags/ES.png",
        "Sweden": "https://eschome.net/flags/SE.png",
        "Switzerland": "https://eschome.net/flags/CH.png",
        "Turkey": "https://eschome.net/flags/TR.png",
        "Ukraine": "https://eschome.net/flags/UA.png",
        "United Kingdom": "https://eschome.net/flags/GB.png",
        "Yugoslavia": "https://eschome.net/flags/YU.png"
    }
]
*
*/

