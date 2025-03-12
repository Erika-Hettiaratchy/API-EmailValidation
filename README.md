# Stock Price Tracker with Google Sheets & Automation  

[View Stock Prices Google Sheet Here](https://docs.google.com/spreadsheets/d/1vTA3l9_d0gGBjLZkhKYhtcqkIfW0yjtQMuQoybjn5MU/edit?usp=sharing)


## Overview  
This project automates the process of scraping stock prices and storing them in Google Sheets daily. It integrates **Google Colab**, **Yahoo Finance API**, **Google Sheets API**, and **Google Apps Script** to collect, format, and visualize stock price data over time.  

## Technologies Used  
- **Google Colab** – Runs the stock price scraper  
- **Yahoo Finance API** – Fetches real-time stock prices  
- **Google Sheets API** – Updates stock prices in a Google Sheet  
- **Google Apps Script** – Automates script execution daily  

## Features  
- **Daily Stock Price Tracking** – Automatically updates stock prices every day  
- **Google Sheets Integration** – Stores stock data in a structured format  
- **Automated Scheduling** – Uses Google Apps Script to trigger updates daily  
- **Stock Trend Visualization** – Generates graphs to track stock price fluctuations over time  

## How It Works  
1. **Data Scraping** – Fetches stock prices using Yahoo Finance  
2. **Data Storage** – Saves stock prices in a structured Google Sheet  
3. **Data Visualization** – Formats the sheet and creates charts  
4. **Automation** – Google Apps Script triggers Colab to run daily  

## How to Use  
1. **Set Up Google Colab** – Upload and run the script  
2. **Set Up Google Sheets** – Link the script to a Google Sheet  
3. **Set Up Google Apps Script** – Schedule automatic execution  


## Example Output  
The Google Sheet contains data in the following format:  

| Date       | Stock Symbol | Price  |  
|------------|-------------|--------|  
| 2025-01-20 | AAPL        | 182.45 |  
| 2025-01-21 | AAPL        | 184.12 |  
| ...        | ...         | ...    |  


A graph is also generated to visualize stock trends over time.  

## Future Improvements  
- Add more stock market sources for accuracy  
- Implement alerts for significant price changes  
- Export data as a CSV file  

