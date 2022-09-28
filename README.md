1.Database:
_______________________________________________
    / 2 collections, one for users and one for shifts

    Shifts:::
    1. Create form to take in shift data
    2. Create schema for the shift data
    3. Get newly created shift objects to be submitted to the database

    Users ::::
    1. Create log in form
    2. Create schema for the Users
    3. Push user data into MongoDB

    Calendar:::
    1. display upcoming shifts that have been added by the user
    2. display the expected earnings and hours for the Shifts
    3. push calendar data to MongoDB


2. Dashboard:
_______________________________________________
    / Displays visual representation for earnings/savings goals etc.
    / Displays your next upcoming shift and what your expected hours and earnings for that shift are
    / Displays volatility graph for earnings/shift and shows how severe volatlity is
    / Add shifts button leading to calendar

    Dashboard features:::
    1. Percentage of savings goal complete
    2. Earned today/this week/month etc.
    3. Hours worked
    4. Average tip Percentage
    5. Best earning section

    Dashboard functions:::
    1. calculateEarningsPerHour() -- the amount that the user can expect to make per hour (average of all earnings divided by total hours worked)
    2. calculateEarningsPeriodTotals() -- how much in total did the user earn over 1day, 7day, 30day and 365day periods
    3. calculateHoursForPeriod() -- sum shift hours for the period //carry over from calendar functions
    4. calculateAverageTipPercentageForPeriod() -- based on total sales for the period, how much did the user earn in tips per dollar in percentage terms 
    5. calculateExpectedAverageEarningsForPeriod() -- based on historically how often the user has worked in a 7 day period, project earnings for single day, 7 day, 30 day and 365 day periods
    6. calculateSectionEarnings()
    
    
3. Calendar:
_______________________________________________
    / Displays upcoming shifts
    / Displays hours worked this week and last week
    / Displays expected hours based on the number of shifts you have coming upcoming

    Calendar functions:::
    1. calculateExpectedShiftLength()
    2. calculateExpectedShiftEarningsForPeriod()
    3. calculateHoursForPeriod()
    4. caculateProjectedHoursForPeriod()




________________________________________________________________________________________________________________________________
Build order:

Wednesday, Sept 28th:
-Make sure that totals for dashboard only pertain to the logged in User
-Make submitShift reroute to dashboard
-Create savings goal meter
-Allow ability to update/delete existing shifts for users


For the initial MVP of this app, you are using Tailwind CSS to quickly ensure functionality. Styles will be applied at a later date. Build as little of the HTML/CSS as possible yourself

App to do list:

-User data form and updating user model data with put requests
-Incorporate react
-Savings goal odometer
-Time frame predictions based on floating volatility ratio
-Create analytics schema
-Shift Calendar
-Integrate google api for map overlay
