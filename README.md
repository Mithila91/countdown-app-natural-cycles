# Countdown Web Application

This is a countdown web application built using Angular and TypeScript. The app allows users to set an event title and end date, and it displays the time remaining in the format "Days, Hours(h), Minutes(m), Seconds(s)." The application is responsive, working well in both portrait and landscape orientations, and ensures that text dynamically resizes to fit the screen width. 
- When Title is not given it will default to "Your Event",
- When the Date is not set it wll default to Todays

## Features

- **Set and Update Event Title and Date**: Users can input and modify the event title and the end date, with the countdown automatically updating in real time.
- **Dynamic Countdown**: The countdown starts from the current time and accurately calculates the time left until the specified end date.
- **Responsive Design**: The app is designed to work in both portrait and landscape modes, with text resizing to fill the width of the screen.
- **Persistence**: The event title and date are saved in `localStorage` to persist between page reloads.
- **Accessibility**: ARIA labels have been added to improve accessibility for screen readers.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mithila91/countdown-app-natural-cycles
   cd countdown-app-natural-cycles
   ```

## URL to deployed app
https://countdown-app-natural-cycles.vercel.app/