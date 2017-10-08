# daf-metabase-cacher
A microservice to cache Metabase plots

This microservice is used by [daf-dataportal](https://github.com/italia/daf-dataportal),
iterates over the various plots, takes a screenshot, and caches them.

## Requirements

### Production

- Docker
- Apache or NginX with PHP Interpreter

### Contriburtion and Development

- NodeJS
- Angular Cli

## Usage and Cacher with Docker

1. Clone the project into web server root ex. /var/www/html
    ```bash
    cd /var/www/html
    git clone https://github.com/italia/daf-metabase-cacher
    cd daf-metabase-cacher
    ```
    
2. Install html2pdf.it
    ```bash
    ./html2pdf.it.sh
    ```
3. Manually get screen of websites
    ```bash
    ./cron.sh
    ```
4. Open the dashboard in your web browser Ex. http://localhost/daf-metabase-cacher/
5. Automation: 

To update periodically the data, insert script 'cron.sh' into your cron service once a day 

## Contribute and build update

1. Edit Angular App "./dashboard"
2. make a build using
    ```bash
    ./build.sh
    ```

# Credits

Powered by the developer team of [`Olomedia`](http://www.olomedia.com)
* Marcello Vetro
* Fabio Pileri
* Emilio Bellomo