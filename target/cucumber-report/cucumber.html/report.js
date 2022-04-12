$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Jobsearch.feature");
formatter.feature({
  "line": 2,
  "name": "Job Search",
  "description": "As a user I want to search the Job in cv Library",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;2"
    },
    {
      "cells": [
        "Software Test Engineer",
        "West Midlands",
        "up to 15 miles",
        "35000",
        "75000",
        "Per annum",
        "Contract",
        "Contract Software Test Engineer jobs in West Midlands"
      ],
      "line": 22,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;3"
    },
    {
      "cells": [
        "Software Engineer",
        "Stevenage Hertfordshire",
        "up to 10 miles",
        "30000",
        "45000",
        "Per annum",
        "Permanent",
        "Permanent Software Engineer jobs in Stevenage"
      ],
      "line": 23,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;4"
    },
    {
      "cells": [
        "Software Engineer",
        "Glasgow City",
        "up to 10 miles",
        "30000",
        "60000",
        "Per annum",
        "Contract",
        "Contract Software Engineer jobs in Glasgow"
      ],
      "line": 24,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;5"
    },
    {
      "cells": [
        "Software Test Engineer",
        "Derbyshire",
        "up to 25 miles",
        "4500",
        "6000",
        "Per month",
        "Permanent",
        "Permanent Software Engineer jobs in Derbyshire"
      ],
      "line": 25,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;6"
    },
    {
      "cells": [
        "Tester",
        "Coventry",
        "up to 10 miles",
        "50000",
        "75000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Coventry"
      ],
      "line": 26,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;7"
    },
    {
      "cells": [
        "Tester",
        "Central London",
        "up to 15 miles",
        "60000",
        "90000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Central London"
      ],
      "line": 27,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11981254599,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 388718499,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 451595400,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 694051300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 465127500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 976237701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 611557000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 397117199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 226485600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 146655001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 214639000,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 275433000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 6605599400,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Permanent Tester jobs in Harrow on the Hill] but found [Permanent Testerharrow jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:36)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobsearchSteps.java:87)\r\n\tat ✽.Then I should be able to verify the result message \"Permanent Tester jobs in Harrow on the Hill\"(Jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2744062400,
  "status": "passed"
});
formatter.before({
  "duration": 6718905201,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"West Midlands\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Contract Software Test Engineer jobs in West Midlands\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 118700,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 529395899,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 992310700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1588198800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West Midlands",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 982412499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 361451599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 243031601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 194844899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 200585900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 212492000,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 239328200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Test Engineer jobs in West Midlands",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 7012520400,
  "status": "passed"
});
formatter.after({
  "duration": 1279051600,
  "status": "passed"
});
formatter.before({
  "duration": 8496819700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Stevenage Hertfordshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"45000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Software Engineer jobs in Stevenage\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1004001,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 432139200,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 1864349799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1253047701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stevenage Hertfordshire",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 773618200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 499760500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 365383600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 224427301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 275339900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 265863199,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 232755899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Engineer jobs in Stevenage",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 8034955901,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Permanent Software Engineer jobs in Stevenage] but found [Permanent Software Engineers jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:36)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobsearchSteps.java:87)\r\n\tat ✽.Then I should be able to verify the result message \"Permanent Software Engineer jobs in Stevenage\"(Jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2233577501,
  "status": "passed"
});
formatter.before({
  "duration": 5045623800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Glasgow City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Contract Software Engineer jobs in Glasgow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 69301,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 262110101,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 461392300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 245633901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow City",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 251913800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 220356000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 182525101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 148883799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 91941901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 123394600,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 281613800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Engineer jobs in Glasgow",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 6809936500,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Contract Software Engineer jobs in Glasgow] but found [Contract Software Engineer jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:36)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobsearchSteps.java:87)\r\n\tat ✽.Then I should be able to verify the result message \"Contract Software Engineer jobs in Glasgow\"(Jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1852721701,
  "status": "passed"
});
formatter.before({
  "duration": 4854477701,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Derbyshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"4500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"6000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Software Engineer jobs in Derbyshire\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 67800,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 331788699,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 421728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 225328000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Derbyshire",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 229881001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 135647800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4500",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 179327899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 104047001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 258145701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 195406300,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 180063800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Engineer jobs in Derbyshire",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 5903908000,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Permanent Software Engineer jobs in Derbyshire] but found [Permanent Software Test Engineer jobs in Derbyshire]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:36)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobsearchSteps.java:87)\r\n\tat ✽.Then I should be able to verify the result message \"Permanent Software Engineer jobs in Derbyshire\"(Jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1624956799,
  "status": "passed"
});
formatter.before({
  "duration": 4979750301,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Coventry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Coventry\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 95300,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 118257500,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 544601500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 148156701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coventry",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 137195601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 311397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 176114400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 112327300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 86560600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 159675900,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 131411800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Coventry",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 5565558200,
  "status": "passed"
});
formatter.after({
  "duration": 1095507100,
  "status": "passed"
});
formatter.before({
  "duration": 5216372499,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Central London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"60000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"90000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Central London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 57701,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 299085601,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 408321800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 175682300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Central London",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 303912900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 102924300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 249339900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 146081200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 74907199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 130257900,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 169250500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Central London",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 6315660999,
  "status": "passed"
});
formatter.after({
  "duration": 1177096600,
  "status": "passed"
});
});