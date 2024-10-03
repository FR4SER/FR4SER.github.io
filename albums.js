const albums = [ //List of album IDs for Spotify embed
    '-', //Blank albums added as filler so we don't loop back around when counting weeks, inelegant but functional.
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-', 
    '-',
    '-',
    '-',
    '-',  
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-', 
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '47boQgN4dboq2f0IcvI4Bt', // Week 40-Starts here as this was made week of 30th sep 24
    '5CTygC3aONv7l0klY4k3hc',
    '7tY7NcC2gKTxXsTJM6zK5I',
    '1XBfZzF7Tp60Y4mvI4au64',
    '0Repe2EiNjaFAFIukrroUM',
    '11oR0ZuqB3ucZwb5TGbZxb',
    '6kPOXxCYCdXBzEbb9dqE90',
    '6eGYLONkDMja0MNtZWnRRB',
    '24E6rDvGDuYFjlGewp4ntF',
    '6lfjbwFGzQ6aSNP1N3JlT8',
    '4Io5vWtmV1rFj4yirKb4y4',
    '4nnQZQWLibK1VIhCGDFjk3',
    '2eia0myWFgoHuttJytCxgX',
    '6EL7gqujlpKJaG4Jficm4N',
    '2ABhVRVG6EWGVQmef37IGP', 
    '3umOBqXWR9VnJTQoe9Qkkj',
    '0d7ftAOWvkhIH5M0gXgWIW', 
    '5RckAEYpUDGYqGpn3OqRyz',
    '4lrBF0IWC9wZiF6btB68ua',
    '78ZshSpqcIXyrYBJGgiPK0',
    '2UCWsnmZEVg9HhnMeKTsim',
    '0C0XlULifJtAgn6ZNCW2eu',
    '3mK2CWUge7AeTGzwHTMwq8',
    '1DtEckheDynfaBDaNeq260',
    '0Ug5scDXUIgGN8yanDBLQw', //Blank albums added as placeholders to avoid overflow, would loop to front of list otherwise




];

// Function to calculate the current week of the year
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const today = new Date();
const weekNumber = getWeekNumber(today); // Get the current week number

// Use modulo to loop through the albums array
const albumIndex = (weekNumber - 1) % albums.length; // Subtract 1 to make it zero-indexed
const albumId = albums[albumIndex];

// Set the iframe src attribute
document.getElementById('album-iframe').src = `https://open.spotify.com/embed/album/${albumId}?utm_source=generator`;