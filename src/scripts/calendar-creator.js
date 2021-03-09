const weeks_in_month = (year, month_number) => {
    let first_of_month = new Date(year, month_number - 1, 1);
    let last_of_month = new Date(year, month_number, 0);

    let used = first_of_month.getDay() + last_of_month.getDate();

    return Math.ceil((used / 7) - 1);
}

const generate_weeks = (number_of_weeks) => {
    let weeks = ['One', 'Two', 'Three', 'Four', 'Five']

    let obj = []

    for (x = 0; x < number_of_weeks; x++) {
        obj.push({week: `Week ${weeks[x]}`, assigned_volunteers: []})
    }

    return obj
}

const generate_json = (year) => {
    let calendar = {
        year: year,
        months: {
            january: generate_weeks(weeks_in_month(year, 1)),
            february: generate_weeks(weeks_in_month(year, 2)),
            march: generate_weeks(weeks_in_month(year, 3)),
            april: generate_weeks(weeks_in_month(year, 4)),
            may: generate_weeks(weeks_in_month(year, 5)),
            june: generate_weeks(weeks_in_month(year, 6)),
            july: generate_weeks(weeks_in_month(year, 7)),
            august: generate_weeks(weeks_in_month(year, 8)),
            september: generate_weeks(weeks_in_month(year, 9)),
            october: generate_weeks(weeks_in_month(year, 10)),
            november: generate_weeks(weeks_in_month(year, 11)),
            december: generate_weeks(weeks_in_month(year, 12)),
        }
    }

    return calendar
}

console.log(JSON.stringify(generate_json(2021)))